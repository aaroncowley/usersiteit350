(ns user
  (:require 
            [mount.core :as mount]
            [customer.figwheel :refer [start-fw stop-fw cljs]]
            [customer.core :refer [start-app]]))

(defn start []
  (mount/start-without #'customer.core/repl-server))

(defn stop []
  (mount/stop-except #'customer.core/repl-server))

(defn restart []
  (stop)
  (start))


