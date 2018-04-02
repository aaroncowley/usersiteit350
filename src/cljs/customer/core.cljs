(ns customer.core
  (:require [reagent.core :as r]
            [reagent.session :as session]
            [secretary.core :as secretary :include-macros true]
            [goog.events :as events]
            [goog.history.EventType :as HistoryEventType]
            [markdown.core :refer [md->html]]
            [ajax.core :refer [GET POST]])
  (:import goog.History))

(defonce session (r/atom {:page :home}))

(defn nav-link [uri title page]
  [:li.nav-item
   {:class (when (= page (:page @session)) "active")}
   [:a.nav-link {:href uri} title]])

(defn navbar []
  [:nav.navbar.navbar-dark.bg-primary.navbar-expand-md
   {:role "navigation"}
   [:button.navbar-toggler.hidden-sm-up
    {:type "button"
     :data-toggle "collapse"
     :data-target "#collapsing-navbar"}
    [:span.navbar-toggler-icon]]
   [:a.navbar-brand {:href "#/"} "customer"]
   [:div#collapsing-navbar.collapse.navbar-collapse
    [:ul.nav.navbar-nav.mr-auto
     [nav-link "#/" "Home" :home]
     [nav-link "#/about" "About" :about]
     [nav-link "#/register" "Register" :register]
     [nav-link "#/login" "Login" :login] 
     [nav-link "#/buy" "Buy" :buy]]]])


(defn send-post! [fields]
  (POST "/register"
        {:params @fields
         :handler #(secretary/dispatch! "#/about")
         :error-handler #(.error js/console (str "error:" %))}))



(defn register-form []
 (let [fields (r/atom {})]
  (fn []
    [:div.content
      [:div.form.group
        [:p "First Name: "
          [:input.form-control
            {:type :text
            :firstname :firstname 
            :on-change #(swap! fields assoc :firstname (-> % .-target .-value))
            :value (@fields :firstname)}]]
        [:p "Last Name: "
          [:input.form-control
            {:type :text
            :lastname :lastname
            :on-change #(swap! fields assoc :lastname (-> % .-target .-value))
            :value (:lastname @fields)}]]
        [:p "Email: "
          [:input.form-control
            {:type :email
            :email :email
            :on-change #(swap! fields assoc :email (-> % .-target .-value))
            :value (:email @fields)}]]
        [:p "Phone Number: "
          [:input.form-control
            {:type :text
            :phone :phone
            :on-change #(swap! fields assoc :phone (-> % .-target .-value))
            :value (:phone @fields)}]]
        [:p "Password: "
          [:input.form-control
            {:type :password
            :password :password
            :on-change #(swap! fields assoc :password (-> % .-target .-value))
            :value (:password @fields)}]]
        [:input.btn.btn-primary {:type :submit :on-click #(send-post! fields) :value "Submit"}]]])))


(defn send-login! [fields]
  (POST "/login"
        {:params @fields
         :handler #(secretary/dispatch! "#/about")
         :error-handler #(.error js/console (str "error:" %))}))


(defn login-form []
 (let [fields (r/atom {})]
  (fn []
    [:div.content
      [:div.form.group
        [:p "Email: "
          [:input.form-control
            {:type :email
            :email :email
            :on-change #(swap! fields assoc :email (-> % .-target .-value))
            :value (:email @fields)}]]
        [:p "Password: "
          [:input.form-control
            {:type :password
            :password :password
            :on-change #(swap! fields assoc :password (-> % .-target .-value))
            :value (:password @fields)}]]
        [:input.btn.btn-primary {:type :submit :on-click #(send-login! fields) :value "Submit"}]]])))


(defn send-buy! [fields]
  (POST "/buy"
        {:params @fields
         :handler #(secretary/dispatch! "#/about")
         :error-handler #(.error js/console (str "error:" %))}))




(defn buy-form []
  (let [fields (r/atom {})]
    (fn []
      [:div.content
        [:div.form.group
          [:p "Food Description: "
            [:input.form-control
              {:type :text
              :food :food
              :on-change #(swap! fields assoc :email (-> % .-target .-value))
              :value (:food @fields)}]]
          [:p "Password: "
            [:input.form-control
              {:type :password
              :password :password
              :on-change #(swap! fields assoc :password (-> % .-target .-value))
              :value (:password @fields)}]]
          [:input.btn.btn-primary {:type :submit :on-click #(send-buy! fields) :value "Submit"}]]])))

(defn about-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [:img {:src (str js/context "/img/warning_clojure.png")}]]]])

(defn register-page []
  [:div.container
   [:div.span12 
    [register-form]]])


(defn login-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [login-form]]]])

(defn buy-page []
  [:div.container
   [:div.row
    [:div.col-md-12
     [buy-form]]]])



(defn home-page []
  [:div.container
   (when-let [docs (:docs @session)]
     [:div.row>div.col-sm-12
      [:div {:dangerouslySetInnerHTML
             {:__html (md->html docs)}}]])])


(def pages
  {:home #'home-page
   :about #'about-page
   :register #'register-page
   :login #'login-page
   :buy #'buy-page})

(defn page []
  [(pages (:page @session))])

;; -------------------------
;; Routes
(secretary/set-config! :prefix "#")

(secretary/defroute "/" []
  (swap! session assoc :page :home))

(secretary/defroute "/about" []
  (swap! session assoc :page :about))
(secretary/defroute "/register" []
  (swap! session assoc :page :register))
(secretary/defroute "/login" []
  (swap! session assoc :page :login))
;;(secretary/defroute "/buy" []
;;  (swap! session assoc :page :buy))

;; -------------------------
;; History
;; must be called after routes have been defined
(defn hook-browser-navigation! []
  (doto (History.)
        (events/listen
          HistoryEventType/NAVIGATE
          (fn [event]
              (secretary/dispatch! (.-token event))))
        (.setEnabled true)))

;; -------------------------
;; Initialize app
(defn fetch-docs! []
  (GET "/docs" {:handler #(swap! session assoc :docs %)}))

(defn mount-components []
  (r/render [#'navbar] (.getElementById js/document "navbar"))
  (r/render [#'page] (.getElementById js/document "app")))

(defn init! []
 ; (load-interceptors!)
  (fetch-docs!)
  (hook-browser-navigation!)
  (mount-components))
