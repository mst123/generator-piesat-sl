/*
 * @Author: mashitu
 * @Date: 2021-01-14 15:32:03
 * @LastEditTime: 2021-11-29 11:09:07
 * @LastEditors: mashitu
 * @Description: 自定义指令全局注册入口文件
 */
import Vue from "vue";
import dialogDrag from "./dialog-drag/index";
import permission from "./permission/index";
// 注册全局指令
Vue.directive("dialog-drag", dialogDrag);
Vue.directive("permission", permission);
