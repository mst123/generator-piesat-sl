/*
 * @Author: mashitu
 * @Date: 2021-01-13 18:08:38
 * @LastEditTime: 2021-01-14 16:02:15
 * @LastEditors: mashitu
 * @Description: 生成 axios 实例
 */

import axios from "axios";
import ipConfig from "../config/ip-config";
// create an axios instance
const service = axios.create({
  baseURL: ipConfig.baseIP // url = base url + request url
});
service.interceptors.request.use(
  config => {
    // 防止get请求缓存
    if (config.method === "get") {
      config.params = {
        ...config.params,
        _t: new Date().getTime()
      };
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
service.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default service;
