import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// global css
import "@/styles/index.scss";
// element 插件
import "./plugins/element.js";
// 全局 filters
import * as filters from "./filters";
// 注册全局 directive 指令
import "./directive/index";

Vue.config.productionTip = false;
// 注册全局 filters 过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key]);
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
