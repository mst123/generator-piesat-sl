/*
 * @Author: mashitu
 * @Date: 2022-04-12 19:45:24
 * @LastEditTime: 2022-04-24 17:46:30
 * @LastEditors: mashitu
 * @Description:
 */
/*
 * @Author: mashitu
 * @Date: 2022-04-12 19:16:39
 * @LastEditTime: 2022-04-12 19:40:15
 * @LastEditors: mashitu
 * @Description: plop 配置
 */
module.exports = plop => {
  // 命令名称
  plop.setGenerator("component", {
    // 描述
    description: "create a component",
    // 命令行输入
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name",
        default: "my-component"
      }
    ],
    // 输入之后的动作
    actions: [
      {
        type: "add", // 代表添加文件
        path: "../src/views/{{name}}/index.vue",
        templateFile: "./index.hbs"
      }
    ]
  });
};
