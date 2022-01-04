/*
 * @Author: mashitu
 * @Date: 2021-01-13 16:28:08
 * @LastEditTime: 2021-01-14 14:02:16
 * @LastEditors: mashitu
 * @Description: 全局过滤器
 */

/**
 * @description: 数字千分位处理
 * @param {*} num
 * @return {*} string
 */
export function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}

/**
 * @description: 首字母自动转换大写
 * @param {*} string
 * @return {*} string
 */
export function uppercaseFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
