# vue-vuetify-admin

使用 Vue 全家桶和 Vuetify UI 库构建的具有巨大潜力的简易后台管理模板。

[English](README.md) | 简体中文

## 起步

这些说明将让你得到能在本地启动、运行的项目副本以进行开发和测试。有关如何在实时系统上部署项目，请参阅[部署](#部署)。

### 准备

- 推荐使用 nvm，长期支持版 lts node，长期支持版 npm 和 yarn。
  - 参照以下链接，首先安装 nvm
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 nvm 是**不**推荐的
  - 接着在终端/命令行安装长期支持版 node

    ```sh
    # for now, lts version is 10.16.3
    # last updated：2019.09.17
    nvm install 10.16.3
    ```

  - 全局升级 npm 到长期支持版，安装 yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - 如果你是国人，或许你应该设置镜像
- Git 也是需要的
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - 使用 [Homebrew](https://brew.sh/) 在 Mac 安装 git 是推荐的

### 安装

```sh
# terminal / command line 1
# clone the project
git clone git@github.com:ModyQyW/vue-vuetify-admin.git

# enter the project directory
cd vue-vuetify-admin

# install dependency
yarn

# start developing
yarn dev

# terminal / command line 2
# clone corresponding backend server for developing
git clone git@github.com:ModyQyW/backend-server.git

# enter the server directory
cd backend-server

# install dependency
yarn

# start server
yarn start
```

## 测试

目前没有测试。欢迎 PR。

## 部署

- 打开 [vue.config.js](./vue.config.js) 并设置第 14 行
- 打开 [axios.js](./src/plugins/axios.js) 并设置第 9 行
- 取消注释 [public/index.html](./public/index.html) 第 33-37 行（开发时应当注释掉）
- 运行 `yarn build`（旧版模式构建）或 `yarn build --modern`（现代模式构建）并得到 `dist` 文件夹
- 上传 `dist` 文件夹内容到你的服务器上
- 设置你的服务器

你可以在 [vue-cli 浏览器兼容性](https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist)和 [vue-cli 部署](https://cli.vuejs.org/zh/guide/deployment.html) 获取更多的信息。

## 主要依赖

- [vue-cli](https://cli.vuejs.org/)：Vue.js 开发的标准工具，用于初始化该项目
- [vue](http://www.dropwizard.io/1.0.2/docs/)：渐进式 JavaScript 框架
- [vuex](https://maven.apache.org/)：一个专为 Vue.js 应用程序开发的状态管理模式
- [vue-router](https://rometools.github.io/rome/)：Vue.js 官方的路由管理器
- [vuetify](https://vuetifyjs.com/en/)：Vue.js 的 material design 组件框架
- [vue-i18n](https://kazupon.github.io/vue-i18n/)：Vue.js 的国际化插件
- [axios](https://github.com/axios/axios)：基于 Promise 的 HTTP 客户端，用于浏览器和 node.js
- [nprogress](https://github.com/rstacruz/nprogress)：极简主义进度条
- [moment](https://momentjs.com/)：在 JavaScript 中解析，验证，操作和显示日期和时间
- [screenfull](https://github.com/sindresorhus/screenfull.js)：用于跨浏览器使用 JavaScript Fullscreen API 的简单包装器
- [vue-count-to](https://github.com/PanJiaChen/vue-countTo)：在指定的持续时间内计入目标数
- [vue-echarts](https://github.com/ecomfe/vue-echarts)：Vue.js 的 [ECharts](https://echarts.apache.org/en/index.html) 组件
- [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor)：Vue.js 的 [quill editor](https://github.com/quilljs/quill) 组件
- [toast-ui.vue-editor](https://github.com/nhn/toast-ui.vue-editor)：Vue.js 的 [Toast UI Editor](https://github.com/nhn/tui.editor) 组件
- [jszip](https://stuk.github.io/jszip/)：一个用于创建，阅读和编辑 .zip 文件的 JavaScript 库，带有简单的 API
- [file-saver](https://github.com/eligrey/FileSaver.js/)：一个 HTML5 `saveAs()` FileSaver 实现
- [vuedraggable](https://github.com/SortableJS/Vue.Draggable)：基于 [Sortable.js](https://github.com/SortableJS/Sortable) 的 Vue 拖拽组件
- [xlsx](https://www.npmjs.com/package/xlsx)：各种电子表格格式的分析器和编写器
- [xss](https://jsxss.com/en/index.html)：使用白名单指定的配置清理不受信任的 HTML（以防止 XSS）
- [eslint](https://eslint.org)：一个为 JavaScript 提供了可插入的规范代码能力的开源项目，这个项目里使用了 [standard](https://standardjs.com/readme-zhcn.html)
- [sass](https://github.com/sass/dart-sass)：[Sass](https://sass-lang.com/) 的纯 JavaScript 实现
- [stylelint](https://stylelint.io/)：一个强大的，现代的规范工具，可以帮助避免错误并在样式中强制执行规范

## 特性

- 响应时
- 鉴权
  - 页面级权限
- I18n：英语 & 简体中文
- 两个主题：浅色和深色
- 四层级路由，对应三层级抽屉导航
- 全屏
- 异常页
- 图表
- 编辑器
  - Markdown 编辑器
  - 富文本编辑器
- 待办
- 文件：保存与压缩

TODO:

- 完整的文档，教导如何修改
- 剪贴板
- 待办
- Excel
  - Excel 上传
  - Excel 预览
  - Excel 下载

## 浏览器支持

有关详细信息，请阅读 [.browerslistrc](./.browsersseslistrc)。你可以在 [browserl.ist](https://browserl.ist/?q=%3E0.25%25+and+last+2+versions+and+not+dead) 查看实际支持的浏览器。全球覆盖率为 88.61％。

下面是 vue-cli 的默认设置。

```sh
>1%
last 2 versions
```

## 贡献

请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md) 了解行为准则以及提交拉取请求的流程的详细信息。

## 版本命名

使用 [SemVer](http://semver.org/) 进行版本控制。有关可用版本，请参阅此仓库的 [releases](https://github.com/ModyQyW/vue-vuetify-admin/releases)。

## 作者

- **Rui Wu** - *最初工作* - [ModyQyW](https://github.com/ModyQyW)

另请参阅参与此项目的 [contributors](https://github.com/ModyQyW/vue-vuetify-admin/contributors) 列表。

## 协议

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## 致谢

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
- [iview-admin](https://github.com/iview/iview-admin)
- [ant-design-pro-vue](https://github.com/sendya/ant-design-pro-vue)
- [d2-admin](https://github.com/d2-projects/d2-admin)
