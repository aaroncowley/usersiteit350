(ns customer.db.core
  (:require [monger.core :as mg]
            [monger.collection :as mc]
            [monger.operators :refer :all])
  (:import org.bson.types.ObjectId [com.mongodb MongoOptions ServerAddress]))

(defonce conn (mg/connect))

(defonce db (mg/get-db conn "customer"))
;;;;;;;;;;;;
;; USERS ;;
;;;;;;;;;;;

(defn save-user [params]
  (mc/insert db "users" params))

(defn login [params]
  (mc/find-one db "customers" {:email params :password params}))


