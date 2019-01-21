(ns smallworld.components.navbar)

(defn navbar
  []
  [:div {:class "ui secondary  menu navbarPadding"}
      [:img {:src "/images/logo/Logo_SW.png"}]
      [:a {:class "active item right"} "Opportunities"]
      [:a {:class "item "} "Bussiness in Cambodia"]
      [:a {:class "item"} "News & Events"]
      [:a {:class "item"} "Contact Us"]])
    


