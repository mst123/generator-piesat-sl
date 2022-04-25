## 说明

项目已集成 `stylelint` `eslint` `git-hooks`，搭配编辑器插件可以

- 自动格式化
  - css 属性顺序
  - vue单文件script属性顺序
  - 常规代码格式化

- commit 格式检测

## 命名规则

### 项目命名

全部采用小写方式， 以短横线分隔。

例：my-project-name

### 目录命名

参照项目命名规则；

有复数结构时，要采用复数命名法。

例：scripts, styles, images, assets

### JS文件命名

参照项目命名规则。

例：account-model.js

### CSS, SCSS文件命名

参照项目命名规则。

例：retina-sprites.scss

### HTML文件命名

参照项目命名规则。

例：error-report.html

## HTML

### 语法

- 缩进使用soft tab（2个空格）；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 不要在自动闭合标签结尾处使用斜线（[HTML5 规范](http://dev.w3.org/html5/spec-author-view/syntax.html#syntax-start-tag) 指出他们是可选的）；

### 字符编码

通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为'UTF-8'。

### HTML5 doctype

在页面开头使用这个简单地doctype来启用标准模式

### 属性顺序

属性应该按照特定的顺序出现以保证易读性；

- `class`
- `id`
- `name`
- `data-*`
- `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
- `placeholder`, `title`, `alt`
- `aria-*`, `role`
- `required`, `readonly`, `disabled`

class是为高可复用组件设计的，所以应处在第一位；

id更加具体且应该尽量少使用，所以将它放在第二位。

### 减少标签数量

在编写HTML代码时，需要尽量避免多余的父节点；

很多时候，需要通过迭代和重构来使HTML变得更少。

### 注释

布局较为复杂的时候，需要添加结构注释

## CSS, SCSS

### 缩进

使用soft tab（2个空格）。

### 分号

每个属性声明末尾都要加分号。

### 空格

以下几种情况不需要空格：

- 属性名后
- 多个规则的分隔符','前
- `!important` '!'后
- 属性值中'('后和')'前
- 行末不要有多余的空格

以下几种情况需要空格：

- 属性值前
- 选择器'>', '+', '~'前后
- '{'前
- `!important` '!'前
- `@else` 前后
- 属性值中的','后
- 注释'/*'后和'*/'前

```
.element {
  /* ... */
}

.element,
.dialog {

}

.element > .dialog{
    ...
}
```

### 换行

以下几种情况不需要换行：

- '{'前

以下几种情况需要换行：

- '{'后和'}'前
- 每个属性独占一行
- 多个规则的分隔符','后

```
.element {
    color: red;
    background-color: black;
}
.element,
.dialog {
    ...
}
```

### 注释

注释统一用'/**/'（scss中也不要用'//'），具体参照下边的写法；

缩进与下一行代码保持一致；

可位于一个代码行的末尾，与代码间隔一个空格。

```css
/* Modal header */
.modal-header {
    ...
}

.modal-header {
  color: red;
  /* 50px */
  width: 50px;
}
```

### 引号

最外层统一使用双引号；

url的内容要用引号；

属性选择器中的属性值需要引号。

```css
.element::after {
  background-image: url('logo.png');
  content: '';
}

li[data-type='single'] {
    ...
}
```

### 命名

- 类名使用小写字母，以中划线分隔
- id采用驼峰式命名
- scss中的变量、函数、混合、placeholder采用驼峰式命名

```css


/* 变量 */
$colorBlack: #000;

.element-content {
    ...
}

/* id */
#myDialog {
    ...
}/* class */

/* 函数 */
@function pxToRem($px) {
    ...
}

/* 混合 */
@mixin centerBlock {
    ...
}
```

### 属性声明顺序

相关的属性声明按右边的顺序做分组处理，组之间需要有一个空行。

```css
.declaration-order {
  background-color: #f5f5f5;

  border: 1px solid #e5e5e5;
  border-radius: 3px;
  bottom: 0;

  color: #333;
  display: block;
  float: right;

  font: normal 13px 'Helvetica Neue', sans-serif;
  height: 100px;
  left: 0;
  line-height: 1.5;

  opacity: 1;

  position: absolute;
  right: 0;
  text-align: center;
  top: 0;
  width: 100px;
  z-index: 100;
}
```

## JavaScript

*项目中会使用eslint进行格式检测，以下供参考*

[standard规范](https://standardjs.com/rules-zhcn.html#javascript-standard-style)

### 缩进

使用soft tab（2个空格）。

### 分号

以下几种情况后需加分号：

- 变量声明
- 表达式
- return
- throw
- break
- continue
- do-while

```
/* var declaration */
var x = 1;

/* expression statement */
x++;

/* do-while */
do {
    x++;
} while (x < 10);
```

### 空格

以下几种情况不需要空格：

- 对象的属性名后
- 前缀一元运算符后
- 后缀一元运算符前
- 函数调用括号前
- 无论是函数声明还是函数表达式，'('前不要空格
- 数组的'['后和']'前
- 对象的'{'后和'}'前
- 运算符'('后和')'前

以下几种情况需要空格：

- 二元运算符前后
- 三元运算符'?:'前后
- 代码块'{'前
- 下列关键字前：`else`, `while`, `catch`, `finally`
- 下列关键字后：`if`, `else`, `for`, `while`, `do`, `switch`, `case`, `try`, `catch`, `finally`, `with`, `return`, `typeof`
- 单行注释'//'后（若单行注释和代码同行，则'//'前也需要），多行注释'*'后
- 对象的属性值前
- for循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，'{'前一定要有空格
- 函数的参数之间

```
var a = {
    b: 1
};


++x;
y++;
z = x ? 1 : 2;

var a = [1, 2];

// good
var a = (1 + 2) * 3;


var doSomething = function(a, b, c) {
    // do something
};

// no space before '('
doSomething(item);

// good
for (i = 0; i < 6; i++) {
    x++;
}
```

### 空行

以下几种情况需要空行：

- 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
- 注释前（当注释在代码块的第一行时，则无需空行）
- 代码块后（在函数调用、数组、对象中则无需空行）
- 文件最后保留一个空行

```
// need blank line after variable declaration
var x = 1;

// not need blank line when variable declaration is last expression in the current block
if (x >= 1) {
    var y = x + 1;
}

var a = 2;

// need blank line before line comment
a++;

function b() {
    // not need blank line when comment is first line of block
    return a;
}

// need blank line after blocks
for (var i = 0; i < 2; i++) {
    if (true) {
        return false;
    }

    continue;
}

var obj = {
    foo: function() {
        return 1;
    },

    bar: function() {
        return 2;
    }
};

// not need blank line when in argument list, array, object
func(
    2,
    function() {
        a++;
    },
    3
);

var foo = [
    2,
    function() {
        a++;
    },
    3
];


var foo = {
    a: 2,
    b: function() {
        a++;
    },
    c: 3
};
```

### 换行

换行的地方，行末必须有','或者运算符；

以下几种情况不需要换行：

- 下列关键字后：`else`, `catch`, `finally`
- 代码块'{'前

以下几种情况需要换行：

- 代码块'{'后和'}'前
- 变量赋值后

```

x = y
    ? 1 : 2;

// good
var a = {
    b: 1,
    c: 2
};

x = y ? 1 : 2;
x = y ?
    1 : 2;

// no need line break with 'else', 'catch', 'finally'
if (condition) {
    ...
} else {
    ...
}

try {
    ...
} catch (e) {
    ...
} finally {
    ...
}

// not good
function test()
{
    ...
}

// good
function test() {
    ...
}

// not good
var a, foo = 7, b,
    c, bar = 8;

// good
var a,
    foo = 7,
    b, c, bar = 8;
```

### 单行注释

双斜线后，必须跟一个空格，只允许放置到上方；

缩进与下一行代码保持一致；

```
if (condition) {
    // if you made it here, then all security checks passed
    allowed();
}
```

### 多行注释

最少三行, '*'后跟一个空格，具体参照右边的写法；

建议在以下情况下使用：

- 难于理解的代码段
- 可能存在错误的代码段
- 浏览器特殊的HACK代码
- 业务逻辑强相关的代码

```
/*
 * one space after '*'
 */
var x = 1;
```

### 文档注释

各类标签@param, @method等请参考[JSDoc Guide](http://yuri4ever.github.io/jsdoc/)；

建议在以下情况下使用：

- 所有常量
- 所有函数
- 所有类

```
/**
 * @description 一个带参数的函数
 * @param {string} a - 参数a
 * @param {number} b=1 - 参数b默认值为1
 * @param {string} [j] - 参数j是一个可选参数
 * @return {string} 返回一个string
 */
function foo(a, b, j) {
    ...
}
```

### 引号

最外层统一使用双引号。

```javascript
var x = "test";
```

### 数组、对象

对象属性名不需要加引号；

对象以缩进的形式书写，不要写在一行；

数组、对象最后不要有逗号。

```javascript
// good
var a = {
    b: 1,
    c: 2
};
```

### 括号

下列关键字后必须有大括号（即使代码块的内容只有一行）：`if`, `else`, `for`, `while`, `do`, `switch`, `try`, `catch`, `finally`, `with`。

### 条件判断

必须使用全等号 `===`

### 尽量使用ES6语法

## vue版本及结构规范

### 1.版本说明

 保证 vue-cli 大版本号为 4，利用该工具进行项目构建 ,UI使用element ui，css预处理使用scss，使用eslint 搭配 eslint-plugin-standard。

### 2.目录结构说明

> `dist`                                                    打包后项目存放位置
>
> `node_modules`                                   npm包
>
> `public`
>
> > index.html                                      html模板
> >
> > favicon.icon                                    页面 title 图标
>
> `src`
>
> > `api`                                                 接口封装
> >
> > `assets`                                           静态资源（图片、字体） iconfont管理
> >
> > `styles`                                           样式文件
> >
> > `components`                                   公共组件
> >
> > `plugins`                                         插件 例如element
> >
> > `directive`                                     自定义指令
> >
> > `filters`                                         自定义过滤器
> >
> > `router`
> >
> > > index.js                                        路由统一入口  
> > >
> > > module                                        路由较多时，分模块管理  
> >
> > `store`
> >
> > > index.js                                        store统一入口  
> > >
> > > module                                        store较多时，分模块管理  
> >
> > `utils`                                               工具类 例如封装的request
> >
> > `views`                                               视图文件存放位置
> >
> > > menu-a                                          按照菜单分模块（根据实际业务需要，可以向下继续拆分）
> > >
> > > > index.vue                                 菜单A入口文件
> > > >
> > > > components                            菜单A相关组件
> > >
> > > menu-b
> > >
> > > > index.vue
> > > >
> > > > componets
> >
> > config                                                 全局配置文件
> >
> > > ip-config.js                                    ip配置文件
> > >
> > > xx-config.js
> >
> > main.js                                                入口文件
>
> .browerslistrc                                         浏览器兼容
>
> .editorconfig                                           编辑器设置
>
> .env.xxx                                                   环境文件
>
> .eslintrc.js                                                eslint配置文件
>
> .gitignore                                                 git忽略
>
> babel.config.js                                        babel语法编译
>
> package.json                                           项目基本信息
>
> README.md                                            记录包添加记录及文档结构说明
>
> vue.config.js                                            webpack配置

## vue编码规范

### 1.组件规范

#### (1) 组件名为多个单词

组件名应该始终是多个单词的，且命名规范为 `KebabCase`格式

```javascript
export default {
 name: 'MyComponent'
}
```

#### (2) 组件文件名称为 pascal-case 格式

```
my-component.vue
```

#### (3) 在 template 模板中使用组件，应使用 pascal-case 模式，并且使用自闭合组件

```
<my-component></my-component>
```

#### (4) 组件中代码缩进必须符合规范，包块html、js、css

#### (5) Props定义应该尽量详细

1. 命名：使用cameCase驼峰命名
2. 必须指定类型
3. 必须加上注释，表明其含义
4. 必须加上`require`或者 `default`，两者二选一

```
props: {
 // 组件状态，用于控制组件的颜色
    status: {
  type: String,
        required: true
    }
}
```

#### (6) 为组件样式设置作用域 `scoped` ，样式穿透统一使用 `:deep`

```
<style lang="scss" scoped>
.......
</style>
```

#### (7) script标签内部解构顺序

搭配`eslint`插件自动格式化

组件/实例的选项应该有统一的顺序。

这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新 property 应该放到哪里。

副作用 (触发组件外的影响)

★ el

全局感知 (要求组件以外的知识)

★ name

★ parent

组件类型 (更改组件的类型)

★ functional

模板修改器 (改变模板的编译方式)

★ delimiters

★ comments

模板依赖 (模板内使用的资源)

★ components

★ directives

★ filters

组合 (向选项里合并 property)

★ extends

★ mixins

接口 (组件的接口)

★ inheritAttrs

★ model

★ props / propsData

本地状态 (本地的响应式 property)

★ data

★ computed

事件 (通过响应式事件触发的回调)

 ★ watch

 生命周期钩子 (按照它们被调用的顺序)

 ★ beforeCreate

 ★ created

 ★ beforeMount

 ★ mounted

 ★ beforeUpdate

 ★ updated

 ★ activated

 ★ deactivated

 ★ beforeDestroy

 ★ destroyed

非响应式的 property (不依赖响应系统的实例 property)

★ methods

渲染 (组件输出的声明式描述)

★ template / render

★ renderError

[来源于官方风格推荐](https://cn.vuejs.org/v2/style-guide/index.html#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%8E%A8%E8%8D%90)

#### (8) 指令使用缩写形式

```
指令缩写 (用 : 表示 v-bind: 、用 @ 表示 v-on: 和用 # 表示 v-slot:) 
```

#### (9) 公用组件需要尽可能的拆分

## 附录

### css属性书写顺序

搭配`stylelint`插件自动格式化

```javascript
// 下面是推荐的属性的顺序 
   "display",
      "visibility",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "clip",
      "zoom",
      "table-layout",
      "empty-cells",
      "caption-side",
      "border-spacing",
      "border-collapse",
      "list-style",
      "list-style-position",
      "list-style-type",
      "list-style-image",
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "box-sizing",
      "border",
      "border-width",
      "border-style",
      "border-color",
      "border-top",
      "border-top-width",
      "border-top-style",
      "border-top-color",
      "border-right",
      "border-right-width",
      "border-right-style",
      "border-right-color",
      "border-bottom",
      "border-bottom-width",
      "border-bottom-style",
      "border-bottom-color",
      "border-left",
      "border-left-width",
      "border-left-style",
      "border-left-color",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font",
      "font-family",
      "font-size",
      "font-weight",
      "font-style",
      "font-variant",
      "font-size-adjust",
      "font-stretch",
      "font-effect",
      "font-emphasize",
      "font-emphasize-position",
      "font-emphasize-style",
      "font-smooth",
      "line-height",
      "text-align",
      "color",
      "background",
      "background-color",
      "background-image",
      "background-repeat",
      "background-attachment",
      "background-position",
      "background-position-x",
      "background-position-y",
      "background-clip",
      "background-origin",
      "background-size",
      "outline",
      "outline-width",
      "outline-style",
      "outline-color",
      "outline-offset",
      "opacity",
      "box-shadow",
      "text-shadow",
      "transition",
      "transition-delay",
      "transition-timing-function",
      "transition-duration",
      "transition-property",
      "transform",
      "transform-origin",
      "animation",
      "animation-name",
      "animation-duration",
      "animation-play-state",
      "animation-timing-function",
      "animation-delay",
      "animation-iteration-count",
      "animation-direction",
      "content",
      "quotes",
      "counter-reset",
      "counter-increment",
      "resize",
      "cursor",
      "user-select",
      "nav-index",
      "nav-up",
      "nav-right",
      "nav-down",
      "nav-left",
      "tab-size",
      "hyphens",
      "pointer-events"
```

### 自动生成头部文件和函数注释的插件(vscode)

#### koroFileHeader

> 生成头部注释 ctrl+alt+i
>
> 生成函数注释  ctrl+alt+t  

下载后需要做一些配置，setting.json配置如下

```
// 头部注释
  "fileheader.customMade": {
    // 头部注释默认字段
    "Author": "your name",
    "Date": "Do not edit", // 设置后默认设置文件生成时间
    "LastEditTime": "Do not edit", // 设置后，保存文件更改默认更新最后编辑时间
    "LastEditors": "your name", // 设置后，保存文件更改默认更新最后编辑人
    "Description": ""
  },
  // 函数注释
  "fileheader.cursorMode": {
    // 默认字段
    "description": "",
    "param": "",
    "return": ""
  },
  // 总体配置
  "fileheader.configObj": {
    "autoAdd": false
  }
```

**函数注释功能失效时**，需要做如下配置，才可以生效 快捷键变为 ctrl+alt+f

![image-20210113171237257](C:\Users\mst\AppData\Roaming\Typora\typora-user-images\image-20210113171237257.png)

效果示例

```
/*
 * @Author: mashitu
 * @Date: 2021-01-13 16:28:08
 * @LastEditTime: 2021-01-13 17:06:48
 * @LastEditors: mashitu
 * @Description: 
 */
 
 /**
 * @description: 
 * @param {*} a
 * @param {*} b
 * @param {*} c
 * @param {*} d
 * @return {*}
 */
function name(a, b, c, d) {
  return params
}
```

### Git commit提交规范

commit message 格式
<type>: <subject>

#### type（必须）

用于说明git commit 的类别，只允许使用下面的标识。

- feat：新功能（feature）。

- fix/to：修复bug，可以是QA 发现的BUG，也可以是研发自己发现的BUG。
  - fix：产生diff 并自动修复此问题。适合于一次提交直接修复问题。
  - to：只产生diff 不自动修复此问题。适合于多次提交。最终修复问题提交时使用fix.

- docs：文档（documentation）

- style：格式（不影响代码运行的变动）。

- refactor：重构（即不是新增功能，也不是修改bug 的代码变动）。

- perf：优化相关，比如提升性能、体验。

- test：增加测试。

- chore：构建过程或辅助工具的变动。

- revert：回滚到上一个版本。

- merge：代码合并。

- sync：同步主线或分支的Bug。

#### subject(必须)

subject是commit目的的简短描述，不超过50 个字符，建议使用中文，结尾不加句号或其他标点符号。
根据以上规范git commit message 将是如下的格式：

- fix:用户查询缺少 `username` 属性
- feat:用户查询接口开发

### stylelint vscode配置说明

- 在vscode 插件中搜索安装stylint

- 在setting中配置如下参数，即可以保存自动修改css样式

  ```
   "editor.codeActionsOnSave": {
      "source.fixAll.stylelint": true
    },
    "stylelint.validate": [
      "css",
      "less",
      "postcss",
      "scss",
      "vue",
      "sass"
    ],
  ```
