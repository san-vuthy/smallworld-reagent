(ns smallworld.components.footer)


(defn footerIcon
  [link img title]
  [:a {:href link}
    [:p {:class "ui header footerIcon"}
        [:img {:class "ui image", :src img}]
        [:div {:class "content"} title]]])

(defn footer
  []
  [:div.ui.container
    [:div.footer
        [:div {:class "ui stackable four column grid"}
            [:div.column
                [:a {:href "#"}
                    [:p "Oppunities"]]
                [:a {:href "#"}
                    [:p "News & events"]]
                [:a {:href "#"}
                    [:p "Useful links"]]
                [:a {:href "#"}
                    [:p "Contac Us"]]]
            [:div.column
                [:a {:href "#"}
                    [:p "Tern & Condition"]]
                [:a {:href "#"}
                    [:p "Policy Uses"]]
                [:a {:href "#"}
                    [:p "Legal System"]]]
            [:div.column]
            [:div.column
                (footerIcon "#" "/images/socialMedia/telegram.svg" "Telegram")
                (footerIcon "#" "/images/socialMedia/facebook.svg" "Facebook")
                (footerIcon "#" "/images/socialMedia/twitter.svg" "Twitter")]]

        [:div {:class "ui stackable four column grid"}
            [:div.column 
                [:div {:class "ui left icon input searchInput"}
                    [:input {:type "text", :placeholder "Search..."}]
                    [:i {:class "search icon"}]]]
            [:div.column ""]
            [:div.column ""]
            [:div.column 
                [:img {:src "/images/logo/Logo_SW_Gray.png"}]]]]])
