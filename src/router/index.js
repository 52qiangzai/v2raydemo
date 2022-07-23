import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
import V2ray from "@/pages/V2ray";
import Home from "@/pages/Home";
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: "/", component: Home, name: "home" },
    { path: "/v2ray", component: V2ray, name: "v2ray" },
  ],
});
export default router;
