import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "normalize.css";
import "@/scss/main.scss";

import firebase from "firebase/app";
import "firebase/firestore";

import "../filters";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// Global filter
Vue.filter("upperCase", function(value) {
    return value.toUpperCase();
});

// Global directive
Vue.directive("bold", {
    bind: function(el) {
        el.style.fontWeight = "bold";
    }
});

Vue.directive("font", {
    bind: function(el, binding) {
        el.style.fontSize = binding.value + "px";
        if (binding.modifiers.orange) {
            el.style.color = "orange";
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
    created() {
        // Your web app's Firebase configuration
        var firebaseConfig = {
            apiKey: "AIzaSyCZpD14SopS-BXsQkF0Gs5W41u2cvicdTM",
            authDomain: "blogs-95759.firebaseapp.com",
            databaseURL: "https://blogs-95759.firebaseio.com",
            projectId: "blogs-95759",
            storageBucket: "blogs-95759.appspot.com",
            messagingSenderId: "1024157507013",
            appId: "1:1024157507013:web:220a987e0f5b7827cdbfac",
            measurementId: "G-QMQK5T3ZVN"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
      }
}).$mount("#app");
