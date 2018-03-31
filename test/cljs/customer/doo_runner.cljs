(ns customer.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [customer.core-test]))

(doo-tests 'customer.core-test)

