(ns ^:figwheel-no-load customer.app
  (:require [customer.core :as core]
            [devtools.core :as devtools]))

(enable-console-print!)

(devtools/install!)

(core/init!)
