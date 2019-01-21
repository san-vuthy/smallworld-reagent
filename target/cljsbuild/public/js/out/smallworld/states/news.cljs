(ns smallworld.states.news
    (:require [reagent.core :as reagent :refer [atom]]))


(def news (atom [   {   :id 1
                        :image "https://semantic-ui.com/images/wireframe/image.png"
                        :title "Estonia’s Icefire: the fine art of financial technology"
                        :tag "News"},
                    {   :id 2
                        :image "https://semantic-ui.com/images/wireframe/image.png"
                        :title "Estonia’s Icefire: the fine art of financial technology"
                        :tag "Hello World"},
                    {   :id 3
                        :image "https://semantic-ui.com/images/wireframe/image.png"
                        :title "Estonia’s Icefire: the fine art of financial technology"
                        :tag "Hello World"},
                    {   :id 4
                        :image "https://semantic-ui.com/images/wireframe/image.png"
                        :title "Estonia’s Icefire: the fine art of financial technology"
                        :tag "Hello World"}]))


