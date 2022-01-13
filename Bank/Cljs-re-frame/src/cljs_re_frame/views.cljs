(ns cljs-re-frame.views
  (:require [cljs-re-frame.authentication :as auth]
            [cljs-re-frame.events :as events]
            [cljs-re-frame.subs :as subs]
            [clojure.string :as str]
            [markdown-to-hiccup.core :as markdown]
            [re-frame.core :as rf]))

(defn print-date [^js/Date d]
  (str (.getDate d) "/"
       (.getMonth d) "/"
       (.getFullYear d)))

(def nav-items
  (->> [{:id :overview
         :icon "lamp"
         :text "Overview"}
        {:id :accounts
         :icon "coins"
         :text "Accounts"}
        {:id :payments-and-transfer
         :icon "arrows"
         :text "Payments & Transfer"}
        {:id :investment
         :icon "chart"
         :text "Investment"}
        {:id :pension-and-insurance
         :icon "wineglass"
         :text "Pension & Insurance"}
        {:id :messages
         :icon "envelope"
         :text "Messages"}
        {:id :profile
         :icon "profile"
         :text "Profile"}
        {:id :developer-support
         :icon "code"
         :text "Developer Support"}]
       (map (juxt :id identity))
       (into {})))

(defn create-columns [attributes & columns]
  [:div.columns.account attributes
   [:<>
    (for [{:keys [content attrs]} columns]
      [:div.column.is-4 (update attrs :key (fnil identity (random-uuid)))
       content])]])

(defn log-in-button []
  (let [auth-user-info (deref (rf/subscribe [::subs/auth-user]))
        button-style {:background-color "transparent"
                      :border-style "none"
                      :font-size "18px"}
        log-in-fn auth/login
        log-off-fn #(rf/dispatch [::events/logout])
        button (fn [text on-click-fn]
                 [:a.button {:style button-style
                             :on-click on-click-fn}
                  [:<>
                   [:span.navbar-item text]
                   [:div.icon.power-off-white]]])]
    [:div.buttons
     (if (nil? auth-user-info)
       [button "Log on" log-in-fn]
       [button "Log off" log-off-fn])]))

(defn page-content [& {:keys [title page-type content]}]
  [:div.card {:style {:box-shadow "none"
                      :background-color "white"}}
   [:div.card-content
    [:article.media
     [:div.media-left
      [:figure.image {:class (str "is-32x32 icon " (:icon (nav-items page-type)))}]]]
    [:div.content
     [:h1.title (or title (:text (nav-items page-type)))]
     [content]]]])

(defn profile []
  (let [auth-error (deref (rf/subscribe [::subs/auth-error]))
        auth-user-info (deref (rf/subscribe [::subs/auth-user]))]
    [page-content
     :page-type :profile
     :content (fn []
       [:div
        (when auth-user-info
          [:<>
           (for [[k v] auth-user-info]
             (create-columns {:key (str "auth-user-info-" (name k))}
                             {:content (str/capitalize (name k))} {:content v}))
           [:button.button.is-danger {:on-click (fn [_] (rf/dispatch [::events/logout]))}
            "Log off"]])
        (when auth-error
          [:p (str "auth error: " auth-error)])])]))

(defn accounts-view []
  (let [accounts (deref (rf/subscribe [::subs/accounts]))]
    [:<>
     [create-columns {:class "header"}
      {:content "Name"}
      {:content "Balance"}
      {:content "Recent Transactions"}]
     (for [{:keys [account-name id balance last-transaction-date]} accounts]
       [create-columns {:key id}
        {:content account-name}
        {:content balance}
        {:content (print-date last-transaction-date)}])]))

(defn accounts []
  [page-content
   :page-type :accounts
   :content (fn [] [accounts-view])])

(defn payments-and-transfer []
  [page-content
   :page-type :payments-and-transfer
   :content (fn [] [:div])])

(defn investment []
  [page-content
   :page-type :investment
   :content (fn [] [:div])])

(defn pension-and-insurance []
  [page-content
   :page-type :pension-and-insurance
   :content (fn [] [:div])])

(defn message-view [{:keys [index from title content date read? id]}]
  [:article.accordion.message-item
   [:div.accordion-header.message-item.toggle {:class (str "message-item-" index)
                                               :on-click #(rf/dispatch [::events/message-read id])}
    [:div.message-item.from
     (when (not read?)
       [:div.icon.dot {:style {:margin-right "12px"}}])
     [:span (str from " " date)]]
    [:span.message-item.subject title]]
   [:div.accordion-body
    [:div.accordion-content.message-item
     [:div (->> content
                markdown/md->hiccup
                markdown/component)]]]
   [:section
    [:a.button.reply {:href "mailto:support@criipto.com"}
     [:span "Reply"]
     [:div.icon.reply]]]])

(defn messages []
  [page-content
   :page-type :messages
   :content (fn []
     (let [messages (->> (deref (rf/subscribe [::subs/messages]))
                         vals
                         (sort-by :date #(compare %2 %1)))]
       [:section.accordions
        (for [[index {:keys [id] :as message}] (map-indexed vector messages)]
          [:div {:key (str "message-" id)}
           [message-view (assoc message :index index)]])]))])

(defn developer-support []
  [page-content
   :page-type :developer-support
   :content (fn [] [:h4 "http://criipto.slack.com/"])])

(def front-page-icons
  [{:icon "apartment"
    :text "Housing"}
   {:icon "car"
    :text "Cars"}
   {:icon "chart"
    :text "Investment"}
   {:icon "wineglass"
    :text "Pension"}
   {:icon "hand-holding-medical"
    :text "Insurance"}
   {:icon "credit-card"
    :text "Cards"}
   {:icon "coins"
    :text "Loans"}
   {:icon "cardboard-box"
    :text "More products"}])

(def tiles-content
  [{:title "Easy digital signing of sensitive documents"
    :text "Criipto provides Criipto Bank’s secure and user-friendly signing solution so you can sign securely - on your computer and on the go."
    :icon "signature"}
   {:title "Easy login to Criipto Bank"
    :text "Criipto Bank is using Criipto's easy and secure login solution. It saves us a lot of money that we can spend on better service for you!'"
    :icon "power-off"}
   {:title "MitID has arrived - We have you covered"
    :text "Don’t worry. We have your back. With Criipto’s easy e-ID login solution we provide MitID and NemID login side-by-side."
    :icon "mitid"}])

(defn front-page []
  [:div.columns
   [:div.column.is-2]
   [:div.column.is-8
    [:div.tile.is-ancestor.splash-menu
     [:div.tile.is-parent
      (for [{:keys [text icon]} front-page-icons]
        [:div.tile.is-child {:key (str "front-page-" text "-" icon)}
         [:div.menu-icon.icon {:class icon}]
         [:div.menu-name text]])]]
    [:div.tile.is-ancestor
     [:div.tile.is-parent
      [:div.tile.is-child.box.banner
       [:div.banner.overlay]
       [:div.banner-content
        [:h2.subtitle.banner "BUSINESS TO BUSINESS"]
        [:h1.title.banner "“We save 120 dev hours a year with Criipto’s e-ID login”"]]]]]
    [:div.tile.is-ancestor
     [:div.tile.is-parent
      (for [{:keys [title text icon]} tiles-content]
        [:div.tile.is-child.box.splash-item {:key (str "front-page-" icon)}
         [:div.icon.is-40h.splash-item {:class icon}]
         [:h1.title.splash-item title]
         [:div.content.splash-item text]])]]]])

(defn overview []
  [:<>
   (let [auth-user-info (deref (rf/subscribe [::subs/auth-user]))]
     [page-content
      :title (:name auth-user-info)
      :page-type :profile
      :content (fn []
                 [:h2.subtitle.is-size-6
                  (str "Fødselsdag: " (:birthdate auth-user-info))])])
   [page-content
    :page-type :messages
    :content (fn []
               (let [messages (->> (deref (rf/subscribe [::subs/messages]))
                                   vals
                                   (remove :read?)
                                   (sort-by :date #(compare %2 %1))
                                   (take 2))]
                 [:section.accordions
                  (for [[index {:keys [id] :as message}] (map-indexed vector messages)]
                    [:div {:key (str "message-" id)}
                     [message-view (assoc message :index index)]])]))]
   [page-content
    :page-type :accounts
    :content (fn [] [accounts-view])]])

(defn pages [page-name]
  (case page-name
    :accounts              [accounts]
    :developer-support     [developer-support]
    :investment            [investment]
    :messages              [messages]
    :overview              [overview]
    :payments-and-transfer [payments-and-transfer]
    :pension-and-insurance [pension-and-insurance]
    :profile               [profile]
    [overview]))

(defn navigation-menu []
  (let [number-of-unread-messages (deref (rf/subscribe [::subs/number-of-unread-messages]))]
    [:div.column.is-one-quarter.is-one-fifth-fullhd
     [:nav.panel {:style {:box-shadow "none"}}
      [:div
       (for [{:keys [id icon text]} (vals nav-items)]
         [:div {:key id}
          [:div.menu-item.panel-block {:on-click #(rf/dispatch [::events/set-active-page id])}
           [:span.panel-icon
            [:div.icon {:class icon}
             (when (and (= id :messages) (< 0 number-of-unread-messages))
               [:span.badge {:class "is-danger"}
                number-of-unread-messages])]]
           [:span text]]
          [:br]])]]]))
