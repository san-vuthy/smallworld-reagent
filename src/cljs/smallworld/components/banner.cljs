(ns smallworld.components.banner
    (:require [smallworld.components.navbar :refer [navbar]]))

(defn banner
  []
  [:div.backBanner
    (navbar)
    [:div.ui.container
        [:div.bannerContent
            [:h2 "Northern europe’s hub for knowledge and digital business"]
            [:p.paragraph "World-class human capital, unique digital capabilities and a competitive business environment make Estonia a smart, agile location for businesses with global ambitions."]

            [:button {:class "ui basic button btnLearnMore"} "LEARN MORE"]]]])
                
