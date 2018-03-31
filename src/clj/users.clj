(ns turbo-tenure.users
  (:require [turbo-tenure.db.core :as db]
            [turbo-tenure.webservice.digital-measures :as ws]
            [turbo-tenure.utils :as ttutils]
            [com.rpl.specter :refer :all]
            [ring.util.io :refer [piped-input-stream]]
[clojure.java.io :as io])

  (defn initialize-user
    "Create a professorial user if the user is not configured"
    [username]
    (let [user-data (db/find-user username)
         reviewer-data (db/find-reviewer username)]
      (cond
        (and
        (empty? user-data)
        (empty? reviewer-data))
        (let [env-admin (ttutils/env-or-throw :tt-admin)]
          (if (= env-admin username)
            (db/create-reviewer username)
            (db/create-professorial username)))
        ;; user exists but does not have :updated
        ;; TODO this auto-update is breaking reviewers
        (and (not (empty? user-data))
             (not (db/applicant-updated? user-data)))
  (db/update-user username))))

)
