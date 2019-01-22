(ns smallworld.functions.information)

(defn information
    []
    [:div.backInformation
      [:div.ui.container
          [:div {:class "ui stackable two column grid"}
              [:div.column
                  [:h1 "Need More Information?"]
                  [:p "What is it like to run a business in Estonia? How to benefit from the e-solutions and the efficiency of our business culture? What are the opportunities in specific sectors?"]
                  [:p "What is it like to run a business in Estonia?"]]
              [:div.column.marginInformation
                  [:p "What is it like to run a business in Estonia? How to benefit from the e-solutions and the efficiency of our business culture? What are the opportunities in specific sectors?"]
                  [:button {:class "ui basic button btnInformation"} "BUSSINESS IN CAMBODIA"]
                  [:button {:class "ui basic button btnInformation"} "CONTACT US"]]]]])