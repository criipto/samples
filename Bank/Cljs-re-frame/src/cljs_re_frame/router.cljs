(ns cljs-re-frame.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))

(def routes
  (let [routes* {""                      :front-page
                 "profile"               :profile
                 "overview"              :overview
                 "auth"                  :auth
                 "accounts"              :accounts
                 "payments-and-transfer" :payments-and-transfer
                 "investment"            :investment
                 "pension-and-insurance" :pension-and-insurance
                 "messages"              :messages
                 "developer-support"     :developer-support}]
    ["" (assoc routes* "/samples/cljs/" routes*)]))

(def history
  (let [dispatch #(rf/dispatch [::route-changed %])
        match #(bidi/match-route routes %)]
    (pushy/pushy dispatch match)))

(defn match-route [uri]
  (bidi/match-route routes uri))

(defn start!
  []
  (pushy/start! history))

(defn path-for [page]
  (let [path (bidi/path-for routes page)]
    (js/console.log (str "path-for: " page))
    (js/console.log path)
    path))

(defn set-token!
  [token]
  (pushy/set-token! history token))
