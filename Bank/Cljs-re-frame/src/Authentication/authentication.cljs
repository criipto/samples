(ns Authentication.authentication
  (:require ["@criipto/auth-js" :as auth]
            [goog.crypt.base64 :as b64]
            [clojure.string :as str]
            [re-frame.core :as rf]))

(def redirect-uri
  (delay (.-href (.-location js/window))))

(def auth-domain "mnie-test.criipto.id")

(def client-id "urn:mnie:1010")

(def acr-mitid "urn:grn:authn:dk:mitid:low")

(defonce ^Object authenticator
  (let [session-storage js/sessionStorage
        args (clj->js {:domain auth-domain
                       :clientID client-id
                       :store session-storage})
        authenticator (auth. args)
        match-object (.redirect.match authenticator)]
    (.. match-object
        (then (fn [result]
                (when-let [parsed-result (some->> result js->clj)]
                  (if (nil? (get parsed-result "error"))
                    (rf/dispatch [:authorized parsed-result])
                    (rf/dispatch [:authorization-error parsed-result])))))
        (catch (fn [err]
                 (rf/dispatch [:authorization-error err]))))
    authenticator))

(defn login []
  (let [args (clj->js {:redirectUri (deref redirect-uri)
                       :acrValues acr-mitid})]
    (.redirect.authorize authenticator args)))

(def json-string->clj (comp #(js->clj % :keywordize-keys true) #(.parse js/JSON %)))
(def b64-enc-json->clj (comp json-string->clj b64/decodeString))

(defn parse-id-token [id-token]
  (let [[header-base64 payload-base64 signature] (str/split id-token #"\.")
        header-parsed (b64-enc-json->clj header-base64)
        payload-parsed (b64-enc-json->clj payload-base64)]
    {:header header-parsed
     :payload payload-parsed
     :signature signature}))

(def js-storage-key-for-auth
  (str "oidc.user:" auth-domain ":" client-id))

(defn clear-url-params! []
  (.replaceState (.-history js/window)
                 (clj->js {})
                 (.-title js/document)
                 (.-pathname js/location)))

(defn save-token-to-js-storage! [js-storage]
  (fn [{:keys [authorization-result] :as _db}]
    (clear-url-params!) ;; clearing away the 'code' url-parameter such that page reloads doesn't trigger call to get token (`../oauth2/token`)
    (let [error? (boolean (get-in authorization-result [:raw :error]))]
      (when (not error?)
        (.setItem js-storage js-storage-key-for-auth (str (:raw (:token authorization-result))))))))

(defn remove-token-from-js-storage! [js-storage]
  (fn [] (.removeItem js-storage js-storage-key-for-auth)))
