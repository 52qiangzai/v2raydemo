import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "animate.css";
import "nprogress/nprogress.css";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store,
  router,
}).$mount("#app");
