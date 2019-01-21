(ns ^:figwheel-no-load smallworld.dev
  (:require
    [smallworld.core :as core]
    [devtools.core :as devtools]))

(devtools/install!)

(enable-console-print!)

(core/init!)
