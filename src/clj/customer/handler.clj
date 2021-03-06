(ns customer.handler
  (:require [compojure.core :refer [routes wrap-routes]]
            [customer.layout :refer [error-page]]
            [customer.routes.home :refer [home-routes]]
            [compojure.route :as route]
            [customer.env :refer [defaults]]
            [mount.core :as mount]
            [customer.middleware :as middleware]))

(mount/defstate init-app
  :start ((or (:init defaults) identity))
  :stop  ((or (:stop defaults) identity)))

(mount/defstate app
  :start
  (middleware/wrap-base
    (routes
      (-> #'home-routes
          ;;(wrap-routes middleware/wrap-csrf)
          (wrap-routes middleware/wrap-formats))
      (route/not-found
        (:body
          (error-page {:status 404
                       :title "page not found"}))))))
