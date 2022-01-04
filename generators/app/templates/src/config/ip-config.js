/*
 * @Author: mashitu
 * @Date: 2021-01-13 16:15:49
 * @LastEditTime: 2021-01-14 16:01:09
 * @LastEditors: mashitu
 * @Description: IP配置文件
 */

// 环境变量
const env = process.env.NODE_ENV;
const IP = {
  development: { // 开发
    baseIP: "http://124.152.119.22:30119/shuibao-teamwork/",
    homeIP: "http://124.152.119.22:30119/shuibao-screen-web/"
  },
  production: { // 生产
    baseIP: "http://124.152.119.22:30119/shuibao-teamwork/",
    homeIP: "http://124.152.119.22:30119/shuibao-screen-web/"
  },
  test: { // 测试
    baseIP: "http://124.152.119.22:30119/shuibao-teamwork/",
    homeIP: "http://124.152.119.22:30119/shuibao-screen-web/"
  }
};

export default IP[env];
