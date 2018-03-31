(ns customer.env
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [customer.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[customer started successfully using the development profile]=-"))
   :stop
   (fn []
     (log/info "\n-=[customer has shut down successfully]=-"))
   :middleware wrap-dev})
