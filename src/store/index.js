import Vue from "vue";
import Vuex from "vuex";
import other from "./module/other";
import v2ray from "./module/v2ray";
Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    other,
    v2ray,
  },
});

export default store;
