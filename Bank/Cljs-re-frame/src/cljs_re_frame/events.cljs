(ns cljs-re-frame.events
  (:require [ajax.core :as ajax]
            [Authentication.authentication :as auth]
            [cljs-re-frame.db :as db]
            [cljs.reader :refer [read-string]]
            [clojure.walk :refer [keywordize-keys]]
            [day8.re-frame.http-fx]
            [re-frame.core :as rf]))

(def messages-url "https://criipto-bank.netlify.app/feliz/messages.json")

(def js-token-storage js/sessionStorage)

(defn read-local-storage [k]
  (some->> (.getItem js-token-storage k)
           read-string))

(rf/reg-cofx
 ::local-store-token
 (fn [cofx _]
   (let [token (read-local-storage auth/js-storage-key-for-auth)]
     (cond-> cofx
       (some? token) (assoc ::local-store-token token)))))

(rf/reg-event-fx
 ::set-active-page
 (fn [{:keys [db]} [_ active-page]]
   (cond-> {:db (assoc-in db [:nav :active-page] active-page)}
     (#{:overview :messages} active-page) (assoc :dispatch [::get-messages]))))

(defn token-payload->user-profile [payload]
  (select-keys payload [:name :birthdate :age :cprNumberIdentifier :country]))

(rf/reg-event-fx
 :authorized
 [(rf/after (auth/save-token-to-js-storage! js-token-storage))]
 (fn [{:keys [db] :as _cofx} [_ result]]
   (let [result* (keywordize-keys result)
         parsed-result (some-> result*
                               :id_token
                               auth/parse-id-token)]
     {:db (-> db
              (assoc-in [:authorization-result :token]
                        {:raw result* :parsed parsed-result})
              (assoc :user-profile (some-> parsed-result
                                           :payload
                                           token-payload->user-profile)))
      :dispatch [::set-active-page :overview]})))

(rf/reg-event-db
 :authorization-error
 (fn [db [_ error-message]]
   (assoc db :authorization-error-message error-message)))

(rf/reg-event-fx
 ::initialize-db
 [(rf/inject-cofx ::local-store-token)]
 (fn [{:keys [::local-store-token] :as _cofx} _]
   (let [parsed-token (some-> local-store-token
                              :id_token
                              auth/parse-id-token)]
     (cond-> {:db (-> db/default-db
                      (assoc-in [:authorization-result :token] {:raw local-store-token :parsed parsed-token})
                      (assoc :user-profile (some-> parsed-token
                                                   :payload
                                                   token-payload->user-profile)))}
       (some? local-store-token) (assoc :dispatch [::get-messages])))))

(rf/reg-event-fx
 ::get-messages
 (fn [{:keys [db]} _]
   {:db (assoc-in db [:loading :messages] true)
    :http-xhrio {:method :get
                 :uri messages-url
                 :response-format (ajax/json-response-format {:keyword? true})
                 :on-success [::get-messages-success]
                 :on-failure [::endpoint-request-error ::get-messages]}}))

(rf/reg-event-db
 ::get-messages-success
 (fn [db [_ messages]]
   (let [old-messages (:messages db)
         new-messages (->> messages
                           keywordize-keys
                           :messages
                           (map (juxt :id identity))
                           (into {}))
         updated-messages (merge-with merge old-messages new-messages)]
     (-> db
         (assoc-in [:loading :messages] false)
         (assoc :messages updated-messages)))))

(rf/reg-event-db
 ::endpoint-request-error
 (fn [db [_ request-type response]]
   (-> db
       (assoc-in [:errors request-type] (get response :status-text))
       (assoc-in [:loading request-type] false))))

(rf/reg-event-fx
 ::logout
 [(rf/after (auth/remove-token-from-js-storage! js-token-storage))]
 (fn [{:keys [db]} _]
   {:db (dissoc db :authorization-result :user-profile)
    :dispatch [::set-active-page :front-page]}))

(rf/reg-event-db
 ::toggle-message
 (fn [db [_ id]]
   (-> db
       (update-in [:messages id :unfolded?] (fnil not false))
       (assoc-in [:messages id :read?] true))))
