(ns smallworld.components.opportunities
    (:require [smallworld.functions.banner :refer [banner]]
              [smallworld.states.opportunities :as state]
              [smallworld.states.news :refer [news]]
              [smallworld.functions.information :refer [information]]))
            

(defn content
  []
  [:div.opportunities
    [:div.ui.container
        [:div {:class "ui stackable four column grid"}
            (map (fn [item]
                    [:div.column {:key (:id item)}
                        [:img {:src (:image item) :class "ui fluid image"}]
                        [:h3 (:title item)]
                        [:p (:desc item)]]) 
                @state/opportunities)]]])


(defn newsAndEvents
    []
    [:div.ui.container
        [:h1.newsAndEvent "News & Events"]
        [:div {:class "ui stackable four column grid"}
         (map (fn [item]
                  [:div.column {:key (:id item)}
                   [:a {:class "newsDetail"}
                       [:img {:src (:image item)  :class "ui fluid image"}]
                       [:h3 (:title item)]
                       [:p (:tag item)]]]) @news)]])
            
(defn opportunities
  []
  [:div
    (banner "url('/images/md_banner_3.jpg')" 
            "40vw"
            "Business opportunities"
            "We are a Northern European hub for industrial, GBS and supply chain sectors and a world leader in IT. As IT becomes the value driver across all industries, Estonia is uniquely positioned as the location of choice for knowledge and digital business."
            "#")
    (content)
    (newsAndEvents)
    [:br]
    [:br]
    [:br]
    (information)])
  
                            


