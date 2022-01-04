/*
 * @Author: mashitu
 * @Date: 2021-11-29 10:44:57
 * @LastEditTime: 2021-11-29 11:02:56
 * @LastEditors: mashitu
 * @Description: 权限指令
 */
export default {
  bind(el, binding, vnode) {
    console.log(el);
    console.log(binding);
    const s = JSON.stringify;
    el.innerHTML =
      "name: " + s(binding.name) + "<br>" +
      "value: " + s(binding.value) + "<br>" +
      "expression: " + s(binding.expression) + "<br>" +
      "argument: " + s(binding.arg) + "<br>" +
      "modifiers: " + s(binding.modifiers) + "<br>" +
      "vnode keys: " + Object.keys(vnode).join(", ");
  }
};
