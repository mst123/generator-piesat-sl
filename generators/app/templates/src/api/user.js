/*
 * @Author: mashitu
 * @Date: 2021-01-14 16:50:26
 * @LastEditTime: 2021-01-14 16:53:14
 * @LastEditors: mashitu
 * @Description: 用户相关api
 */
import request from "@/utils/request";

export function login(data) {
  return request({
    url: "/user/login",
    method: "post",
    data
  });
}

export function getInfo(token) {
  return request({
    url: "/user/info",
    method: "get",
    params: { token }
  });
}
