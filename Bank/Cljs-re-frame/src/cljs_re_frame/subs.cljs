(ns cljs-re-frame.subs
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 ::name
 (fn [db]
   (:name db)))

(rf/reg-sub
  ::auth-error
  (fn [db]
    (get db :authorization-error-message)))

(rf/reg-sub
 ::auth-user
 (fn [db]
   (get db :user-profile)))

(rf/reg-sub
  ::active-page
  (fn [db]
    (get-in db [:nav :active-page])))

(rf/reg-sub
  ::number-of-unread-messages
  (fn [db]
    (->> (get db :messages)
         vals
         (remove :read?)
         count)))

(rf/reg-sub
  ::messages
  (fn [db]
    (get db :messages)))

(rf/reg-sub
  ::accounts
  (fn [db]
    (get db :accounts)))
