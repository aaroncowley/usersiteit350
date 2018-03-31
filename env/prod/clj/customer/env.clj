(ns customer.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[customer started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[customer has shut down successfully]=-"))
   :middleware identity})
