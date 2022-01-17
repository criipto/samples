(ns cljs-re-frame.db)

(defn generate-random-balance []
  (/ (rand-int 1000000) 100))

(defn generate-random-date []
  (js/Date. 2021
            (+ 1 (rand-int 12))
            (+ 1 (rand-int 28))))

(def default-db
  {:nav {:active-page :front-page}
   :accounts [{:account-name "Checking"
               :id (random-uuid)
               :balance (generate-random-balance)
               :last-transaction-date (generate-random-date)}
              {:account-name "Savings"
               :id (random-uuid)
               :balance (generate-random-balance)
               :last-transaction-date (generate-random-date)}
              {:account-name "Child savings"
               :id (random-uuid)
               :balance (generate-random-balance)
               :last-transaction-date (generate-random-date)}]
   :messages {"zero" {:id "zero"
                      :read? true
                      :from "Pierre Laplace"
                      :title "A Philosophical Essay on Probabilities"
                      :content "We may regard the present state of the universe as the effect of its past and the cause of its future. An intellect which at a certain moment would know all forces that set nature in motion, and all positions of all items of which nature is composed, if this intellect were also vast enough to submit these data to analysis, it would embrace in a single formula the movements of the greatest bodies of the universe and those of the tiniest atom; for such an intellect nothing would be uncertain and the future just like the past would be present before its eyes."
                      :date "1773-01-01"}}})
