(ns smallworld.core
    (:require [reagent.core :as reagent :refer [atom]]
              [reagent.session :as session]
              [reitit.frontend :as reitit]
              [clerk.core :as clerk]
              [accountant.core :as accountant]
              [smallworld.components.bannerIndex :refer [bannerIndex]]
              [smallworld.components.index :refer [index]]
              [smallworld.components.opportunities :refer [opportunities]]
              [smallworld.components.opportunities-single-page :refer [opportunities-single]]
              [smallworld.components.footer :refer [footer]]))
              

;; -------------------------
;; Routes

(def router
  (reitit/router
   [["/" :index]
    ["/opportunities" :opportunities]
    ["/opportunities-single" :opportunities-single]
    ["/about" :about]]))

(defn path-for [route & [params]]
  (if params
    (:path (reitit/match-by-name router route params))
    (:path (reitit/match-by-name router route))))

(path-for :about)
;; -------------------------
;; Page components

(defn home-page []
  (fn []
    [:div
      (bannerIndex)
      (index)]))

(defn about-page []
  (fn [] [:span.main
          [:h1 "About smallworld"]]))

(defn opportunities-page []
  (fn [] 
      (opportunities)))


(defn opportunities-single-page []
  (fn [] 
      (opportunities-single)))


;; -------------------------
;; Translate routes -> page components

(defn page-for [route]
  (case route
    :index #'home-page
    :opportunities #'opportunities-page
    :opportunities-single #'opportunities-single-page
    :about #'about-page))


;; -------------------------
;; Page mounting component

(defn current-page []
  (fn []
    (let [page (:current-page (session/get :route))]
      [:div
       [page]
       (footer)])))

;; -------------------------
;; Initialize app

(defn mount-root []
  (reagent/render [current-page] (.getElementById js/document "app")))

(defn init! []
  (clerk/initialize!)
  (accountant/configure-navigation!
   {:nav-handler
    (fn [path]
      (let [match (reitit/match-by-path router path)
            current-page (:name (:data  match))
            route-params (:path-params match)]
        (reagent/after-render clerk/after-render!)
        (session/put! :route {:current-page (page-for current-page)
                              :route-params route-params})
        (clerk/navigate-page! path)))
        
    :path-exists?
    (fn [path]
      (boolean (reitit/match-by-path router path)))})
  (accountant/dispatch-current!)
  (mount-root))
