(ns customer.routes.home
  (:require [customer.layout :as layout]
            [bouncer.core :as b]
            [bouncer.validators :as v]
            [compojure.core :refer [defroutes GET POST]]
            [ring.util.http-response :as response]
            [customer.db.core :as db]
            [clojure.java.io :as io]))

(defn home-page []
  (layout/render "home.html"))



(defroutes home-routes
  (GET "/" []
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))
  (POST "/message" req 
        (db/save-user req)))
  

