/*
 * @Author: mashitu
 * @Date: 2021-01-11 10:11:13
 * @LastEditTime: 2021-01-14 16:03:45
 * @LastEditors: mashitu
 * @Description: 路由配置 复杂度较高时，建议分模块
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "menu-a",
    component: () => import("../views/menu-a/index.vue")
  },
  {
    path: "/b",
    name: "menu-b",
    component: () => import("../views/menu-b/index.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
