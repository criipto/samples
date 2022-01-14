(ns cljs-re-frame.router
  (:require [bidi.bidi :as bidi]
            [pushy.core :as pushy]
            [re-frame.core :as rf]))

(def routes
  ["/samples/cljs/"
   {""                      :front-page
    "profile"               :profile
    "overview"              :overview
    "auth"                  :auth
    "accounts"              :accounts
    "payments-and-transfer" :payments-and-transfer
    "investment"            :investment
    "pension-and-insurance" :pension-and-insurance
    "messages"              :messages
    "developer-support"     :developer-support}])

(defn match-route [uri]
  (bidi/match-route routes uri))

(def history
  (let [dispatch #(rf/dispatch [::route-changed %])
        match #(let [matched-route (bidi/match-route routes %)]
                 (js/console.log "matched-route")
                 (js/console.log matched-route)
                 matched-route)]
    (pushy/pushy dispatch match)))

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
