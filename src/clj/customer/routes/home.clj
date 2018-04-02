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

(defn user-saved [params]
  (db/save-user (:params params))
  (response/ok "user saved"))

(defn login [params]
  (db/login
    (:params params))
  (response/ok "Successful login"))
(defn buy [params]
  (db/buy
    (:params params))
  (response/ok "Successful buy"))

(defroutes home-routes
  (GET "/" []
       (home-page))
  (GET "/docs" []
       (-> (response/ok (-> "docs/docs.md" io/resource slurp))
           (response/header "Content-Type" "text/plain; charset=utf-8")))
  (POST "/register" req
        (user-saved req))
  (POST "/login" req
        (login req))
  (POST "/buy" req
        (buy req)))
  
