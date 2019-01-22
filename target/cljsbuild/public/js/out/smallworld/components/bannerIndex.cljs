(ns smallworld.components.bannerIndex
    (:require [smallworld.functions.banner :refer [banner]]))

(defn bannerIndex
  []
  (banner "url('/images/banner.jpg')" 
          "50vw"
          "Northern europe’s hub for knowledge and digital business"
          "World-class human capital, unique digital capabilities and a competitive business environment make Estonia a smart, agile location for businesses with global ambitions."
          "#"))
