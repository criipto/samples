(ns cljs-re-frame.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))

(def routes ["/" {""                      :front-page
                  "profile"               :profile
                  "overview"              :overview
                  "auth"                  :auth
                  "accounts"              :accounts
                  "payments-and-transfer" :payments-and-transfer
                  "investment"            :investment
                  "pension-and-insurance" :pension-and-insurance
                  "messages"              :messages
                  "developer-support"     :developer-support}])

(def history
  (let [dispatch #(rf/dispatch [::route-changed %])
        match #(bidi/match-route routes %)]
    (pushy/pushy dispatch match)))

(defn start!
  []
  (pushy/start! history))

(def path-for
  (partial bidi/path-for routes))

(defn set-token!
  [token]
  (pushy/set-token! history token))
