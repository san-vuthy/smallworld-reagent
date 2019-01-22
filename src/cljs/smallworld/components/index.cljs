(ns smallworld.components.index
    (:require [smallworld.states.news :refer [news]]
              [smallworld.functions.information :refer [information]]))

(defn boxes
  [img title]
  [:div {:class "item"}
    [:img {:class "ui avatar image indexImage", :src img}]
    [:div {:class "content"}
        [:div {:class "header colorIndex"} title]]])

(defn section1
  []
  [:div.backgroundIndex
    [:div.ui.container
        [:div {:class "ui stackable two column grid"}
            [:div.column.indexSection1
                [:h2 "Our Advantages"]
                [:p "Estonia consistently ranks as a world leader in human capital, digital capability, and ease of doing business. This creates a competitive environment which allows solutions and services to be researched, developed and delivered globally."]
                [:p "From multinational companies to high growth startups, Estonia has a two-decade track record of successful investments and innovations."]]
            [:div.column
                [:div {:class "ui middle aligned animated list"}
                    (boxes "/images/bicycle.svg" "Smart Phone")
                    (boxes "/images/bicycle.svg" "Pro-Business environment")
                    (boxes "/images/bicycle.svg" "Digitally enabled nation")
                    (boxes "/images/bicycle.svg" "Scalable location")
                    (boxes "/images/bicycle.svg" "Solid investment track record")]]]]])
(defn section2
  []
  [:div.backgroundIndexSection2
    [:div.ui.container
        [:div {:class "ui stackable two column grid"}
            [:div.column
                [:div {:class "ui stackable two column grid"}
                    [:div.column
                        [:div {:class "ui middle aligned animated list"}
                            (boxes "/images/bicycle.svg" "Smart Phone")
                            (boxes "/images/bicycle.svg" "Pro-Business environment")
                            (boxes "/images/bicycle.svg" "Digitally enabled nation")
                            (boxes "/images/bicycle.svg" "Scalable location")
                            (boxes "/images/bicycle.svg" "Solid investment")]]
                    [:div.column
                        [:div {:class "ui middle aligned animated list"}
                            (boxes "/images/bicycle.svg" "Smart Phone")
                            (boxes "/images/bicycle.svg" "Pro-Business environment")
                            (boxes "/images/bicycle.svg" "Digitally enabled nation")
                            (boxes "/images/bicycle.svg" "Scalable location")
                            (boxes "/images/bicycle.svg" "Solid investment")]]]]
                
            [:div.column.indexSection1
                [:h2 "Our Advantages"]
                [:p "Estonia consistently ranks as a world leader in human capital, digital capability, and ease of doing business. This creates a competitive environment which allows solutions and services to be researched, developed and delivered globally."]
                [:p "From multinational companies to high growth startups, Estonia has a two-decade track record of successful investments and innovations."]]]]])
  
; Section News and Events
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

; Section Video
(defn Video
  []
  [:iframe {
            :src "//media.myspace.com/play/video/too-short-getting-nailed-109608833-112293079", 
            :frameborder "0", 
            :allowtransparency "true", 
            :webkitallowfullscreen "true" , 
            :mozallowfullscreen "true" , 
            :allowfullscreen "true"
            :class "videoSection"}])
    
            
                    
(defn index
  []
  [:div
    (section1)
    (section2)
    (newsAndEvents)
    (Video)
    (information)])
  
                            


