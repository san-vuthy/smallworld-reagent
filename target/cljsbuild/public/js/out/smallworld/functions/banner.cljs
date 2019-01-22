(ns smallworld.functions.banner
    (:require [smallworld.components.navbar :refer [navbar]]))

(defn banner
  [image height title desc link]
  [:div.backBanner {:style {:backgroundImage image :height height}};}}
    (navbar)
    [:div.ui.container
        [:div.bannerContent
            [:h2 title]
            [:p.paragraph desc]
            [:a {:href link}
              [:button {:class "ui basic button btnLearnMore"} "LEARN MORE"]]]]])
                

