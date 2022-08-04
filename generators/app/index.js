"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  // 用户输入内容
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the sublime ${chalk.red("generator-piesat-sl")} generator!`
      )
    );
    // 输入参数
    const prompts = [
      {
        type: "input",
        name: "prjName",
        message: "Please input project name:",
        default: "piesat-sl-xxx"
      },
      {
        type: "input",
        name: "description",
        message: "Please input project description:",
        default: "piesat sl vue project"
      },
      {
        type: "input",
        name: "author",
        message: "Author's Name",
        default: ""
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  // 依据模板进行新项目结构的写操作
  writing() {
    this.log("\nWriting...\n");
    // EJS 模板引擎
    this.__writingCopy(["package.json"], {
      name: this.props.prjName,
      description: this.props.description,
      author: this.props.author
    });

    this.__writingCopy([
      ".husky",
      "generators",
      "public",
      "src",
      ".browserslistrc",
      ".editorconfig",
      ".env.development",
      ".env.production",
      ".env.test",
      ".eslintrc.js",
      ".stylelintrc.json",
      "babel.config.js",
      "commitlint.config.js",
      "必读说明.md",
      "README.md",
      "vue.config.js",
      "vue版本及结构规范.md"
    ]);
  }

  // 拷贝函数
  __writingCopy(filePath, params) {
    filePath.forEach(item => {
      // Fs 并非nodejs中的fs
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        params
      );
    });
  }
};
