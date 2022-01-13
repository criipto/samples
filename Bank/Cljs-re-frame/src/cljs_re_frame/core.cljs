(ns cljs-re-frame.core
  (:require [cljs-re-frame.config :as config]
            [cljs-re-frame.events :as events]
            [cljs-re-frame.router :as router]
            [cljs-re-frame.subs :as subs]
            [cljs-re-frame.views :refer [front-page pages navigation-menu log-in-button]]
            [re-frame.core :as rf]
            [reagent.dom :as rdom]))

(defn app []
  (let [auth-error (deref (rf/subscribe [::subs/auth-error]))
        auth-user-info (deref (rf/subscribe [::subs/auth-user]))
        active-page (deref (rf/subscribe [::subs/active-page]))]
    [:div
     [:div.navbar-menu
      [:div.navbar-start
       [:div.navbar-item {:class "icon credit-card-logo"}]
       [:div.navbar-item {:class "logo-text"}
        [:span.app-name "%APP-NAME%"]
        [:span.bank "Bank"]]]
      [:div.navbar-end
       [:div.navbar-item
        [log-in-button]]]]

     (cond
       (some? auth-error)
       [:div.columns {:class "is-centered"
                      :style {:margin-top "40px"}}
        [:div.column
         [:div.container
          [:span (str auth-error)]]]]

       (some? auth-user-info)
       [:div.container
        [:div.columns {:class "is-centered"
                       :style {:margin-top "40px"}}
         [navigation-menu]
         [:div.column
          [:div.container
           [pages active-page]]]]]

       :default
       [front-page])]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load start []
  (rf/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [app] root-el)))

(defn init []
  (router/start!)
  (rf/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (start))
