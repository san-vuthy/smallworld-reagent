(ns smallworld.components.opportunities-single-page
    (:require [smallworld.functions.banner :refer [banner]]
              [smallworld.states.opportunities :as state]
              [smallworld.states.news :refer [news]]
              [smallworld.functions.information :refer [information]]))
            
(defn section1
  []
  [:div.background-opportunities-single
    [:div.ui.container
      [:div {:class "ui stackable three column grid"}
        [:div.column.opportunities-single-border 
          [:h2.opportunities-single-title "7.1%"]
          [:p.opportunities-single-desc "of GDP from ICT sector"]]
        [:div.column.opportunities-single-border 
          [:h2.opportunities-single-title "#1"]
          [:p.opportunities-single-desc "globally in digital development"]]
        [:div.column.opportunities-single-border 
          [:h2.opportunities-single-title "130+"]
          [:p.opportunities-single-desc "export markets"]]]]])

(defn section2
  []
  [:div.ui.container
    [:div.background-opportunities-section2
      [:div {:class "ui stackable two column grid"}
        [:div.column
          [:h1.advantages "Our Advantages"]
          [:p.advantagesDesc "From multinationals such as Microsoft and Kuehne+Nagel to high growth startups such as TransferWise and Skype, Estonia creates revolutionary consumer, enterprise and government solutions for global markets."]]
        [:div.column
          [:img {:src "/images/undraw_usability_testing_2xs4.svg" :class "ui medium centered image"}]]]]])

(defn section3
  []
  [:div.ui.container
    [:div.background-opportunities-section2
      [:div {:class "ui stackable two column grid"}
        [:div.column
          [:img {:src "/images/undraw_usability_testing_2xs4.svg" :class "ui medium centered image"}]]
        [:div.column
          [:h1.advantages "Our Advantages"]
          [:p.advantagesDesc "From multinationals such as Microsoft and Kuehne+Nagel to high growth startups such as TransferWise and Skype, Estonia creates revolutionary consumer, enterprise and government solutions for global markets."]]]]])
        
; Related Content
(defn relatedContent
  []
  [:div.ui.container
    [:h1.newsAndEvent "Related Content"]
    [:div {:class "ui stackable four column grid"}
      (map (fn [item]
               [:div.column {:key (:id item)}
                  [:a {:class "newsDetail"}
                      [:img {:src (:image item)  :class "ui fluid image"}]
                      [:h3 (:title item)]
                      [:p (:tag item)]]]) @news)]])

(defn opportunities-single
  []
  [:div
    (banner "url('/images/md_banner_2.jpg')" 
      "45vw"
      "Software Development"
      "From multinationals such as Microsoft and Kuehne+Nagel to high growth startups such as TransferWise and Skype, Estonia creates revolutionary consumer, enterprise and government solutions for global markets."
      "#")
    (section1)
    (section2)
    (section3)
    (relatedContent)
    [:br][:br][:br]
    (information)])
        
          
  
                            


