# 使用

使用一个别人开发好的模板并不是一件一蹴而就的事情。本文档目标在于帮助你缩短上手的时间，进行具有针对性的二次开发。

## 工具

推荐使用 VSCode 进行开发。

下面给出我个人使用的插件。

- [aiXcoder](https://www.aixcoder.com/)
- Ant Design Snippets
- any-rule
- Auto Close Tag
- Beautify
- Bootstrap 4, Font awesome 4, Font Awesome 5 & Pro snippets
- Bracket Pair Colorizer 2
- Code Runner
- Code Spell Checker
- Codelf
- Comment Translate
- CSS Peek
- Debugger for Chrome
- Debugger for Firefox
- Document This
- ESLint
- filesize
- GitLens
- HTML Snippets
- HTMLHint
- Icon Fonts
- Image preview
- Import Cost
- Indent-rainbow
- IntelliSense for CSS class names in HTML
- JavaScript (ES6) code snippets
- jQuery Code Snippets
- LeetCode
- Live Server
- Lorem ipsum
- Markdown All in One
- Markdown Preview Enhanced
- markdownlint
- Material Icon Theme
- Material Theme
- minapp
- Path Autocomplete
- Path Intellisense
- Prettier
- Project Manager
- React Native Tools
- React-Native/React/Redux snippets for es6/es7
- REST Clint
- Sass
- SCSS IntelliSense
- Settings Sync
- Sorting HTML and Jade attributes
- SVG Viewer
- TODO Highlight
- TypeScript Hero
- TypeScript Importer
- uniapp-snippet
- Vetur
- Visual Studio IntelliCode
- vscode-element-helper
- vscode-fileheader
- Vue Peek
- vuetify-vscode
- wpy-beautify

下面给出我个人使用的配置。

```json
{
  "attrsSorter.order": [
    "is",
    "v-for",
    "v-if",
    "v-else-if",
    "v-else",
    "v-show",
    "v-cloak",
    "v-once",
    "v-pre",
    "id",
    "ref",
    "key",
    "v-slot",
    "v-slot.+",
    "#.*",
    "slot",
    "v-model",
    "v-model.+",
    "v-bind",
    "v-bind.+",
    ":.+",
    "v-text",
    "v-text.+",
    "v-html",
    "v-html.+",
    "class",
    "className",
    "v-on.+",
    "@.+",
    "name",
    "data-.+",
    "ng-.+",
    "src",
    "for",
    "type",
    "href",
    "values",
    "title",
    "alt",
    "role",
    "aria-.+",
    "$unknown$"
  ],
  "commentTranslate.targetLanguage": "zh-CN",
  "commentTranslate.multiLineMerge": true,
  "css.validate": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true,
    "source.fixAll.eslint": true
  },
  "editor.detectIndentation": false,
  "editor.fontFamily": "-apple-system, Menlo, 'Fira Code', 'sarasa mono t sc', Monaco, 'Courier New', monospace",
  "editor.fontSize": 14,
  "editor.lineHeight": 20,
  "editor.quickSuggestions": {
    "strings": true
  },
  "editor.suggestSelection": "first",
  "editor.tabSize": 2,
  "editor.wordWrap": "on",
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "emmet.syntaxProfiles": {
    "vue": "html"
  },
  "eslint.alwaysShowStatus": true,
  "eslint.options": {
    "experimentalDecorators": true
  },
  "eslint.run": "onSave",
  "eslint.validate": ["javascript","javascriptreact","typescript","typescriptreact","html","vue"],
  "files.eol": "\n",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.wpy": "vue, vue-html, html"
  },
  "gitlens.views.fileHistory.enabled": true,
  "gitlens.views.lineHistory.enabled": true,
  "javascript.implicitProjectConfig.experimentalDecorators": true,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "javascript.validate.enable": true,
  "less.validate": true,
  "liveServer.settings.donotVerifyTags": true,
  "liveServer.settings.donotShowInfoMsg": true,
  "leetcode.endpoint": "leetcode-cn",
  "markdown.preview.fontSize": 20,
  "minapp-vscode.disableAutoConfig": true,
  "scss.validate": true,
  "todohighlight.include": [
    "**/*.js",
    "**/*.jsx",
    "**/*.ts",
    "**/*.tsx",
    "**/*.vue",
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.sass",
    "**/*.scss",
    "**/*.less",
    "**/*.styl"
  ],
  "todohighlight.isEnable": true,
  "typescript.updateImportsOnFileMove.enabled": "always",
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "window.zoomLevel": -1,
  "workbench.colorTheme": "Material Theme Darker",
  "workbench.iconTheme": "material-icon-theme",
  "workbench.startupEditor": "newUntitledFile",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[json]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  }
}
```

## 语言

本项目使用 JavaScript 开发，辅以 [JSDoc](https://jsdoc.app/)。

使用 JavaScript 的主要目标是降低上手的门槛。未来将会使用 TypeScript 重构本项目。

## 项目结构

```md
├── docs                       文档
│   ├── usage                  使用文档
│   |   ├── README.CN.md
│   │   ├── README.md
├── node_modules               依赖
├── public                     html 页面模板
├── src
│   ├── assets                 资产文件
│   ├── components             全局组件
│   ├── layout                 全局布局
│   ├── locales                国际化 json 文件
│   ├── mixins                 混合
│   │   ├── nprogress.scss     nprogress 样式
│   ├── plugins                挂载到 vue 实例上的插件
│   │   ├── i18n.js            国际化插件
│   │   ├── vuetify.js         vuetify 插件
│   ├── router                 挂载到 vue 实例上的路由
│   │   ├── modules            路由模块
│   │   ├── index.js           暴露路由实例与重置函数
│   │   ├── routes.js          组合路由模块
│   ├── store                  挂载到 vue 实例上的状态树
│   │   ├── modules            状态树模块，分拆状态树
│   │   ├── index.js           暴露状态树实例
│   ├── utils                  工具类，常用于数个文件中
│   │   ├── request.js         axios 封装
│   │   ├── user.js            用户个人习惯及 token 持久化
│   ├── views                  页面文件
│   ├── App.vue                页面入口，全局样式修改，个人习惯初始化
│   ├── guards.js              路由导航守卫
│   ├── main.js                挂载
├── .editorconfig              编辑器设置
├── .env                       指定所有环境的环境变量
├── .gitignore                 指定 git 忽略
├── babel.config.js            babel 配置
├── CONTRIBUTING.md
├── LICENSE
├── package.json               依赖、命令声明
├── README.CN.md
├── README.md
├── vue.config.js              vue-cli 配置
└── yarn.lock                  锁定依赖版本
```

## 全局组件

全局组件应当是数个页面或组件都需要的组件，一般情况下，使用 vuetify 和社区内的组件就足够了，但仍不能排除需要自定义组件的情况。

自定义组件假如只在一个页面内使用到，应当在对应页面的文件夹内新建`components`文件夹，并放入自定义组件，参考`@/layout`；假如在多个页面内使用到，则应放到`@/components`内。

## 国际化

目前支持两种语言：英语和简体中文。

要添加、使用更多字段：

- 首先在所有国际化 json 文件中添加对应的字段和释义
- 然后在页面通过`this.$t('字段')`得到国际化处理后的释义

要添加、使用更多语言：

- 首先在`@/locales`创建一个新语言文件，命名为`${language}.json`
- 然后在新文件中添加其他国际化 json 文件均有的字段和释义

## 网络请求

本项目使用封装后的 axios 进行网络请求，详见 [@/utils/request](../../src/utils/request.js)。所有参数均可根据实际项目情况进行调整。

通过 store 的`dispatch`方法调用 axios 发出请求。

发出请求后，根据实际情况决定是否 return 返回值。假如是需要根据请求来进行相应操作的情况，建议是 return 返回值，参考 [@/store/modules/user](../../src/store/modules/user.js) 和 [@/views/login](../../src/views/login/index.vue)；假如不需要，建议是无需 return 返回值，参考 [@/store/modules/publicApi](../../src/store/modules/publicApi.js) 和 [@/views/dashboard](../../src/views/dashboard/index.vue)。

## 保存数据

状态树内的数据应当是数个页面或组件都所需要的。同时，假如本身页面不多，应该考虑放弃使用状态树。

本项目中使用了 localStorage + 状态树的方案来保存需要的数据。

localStorage 的作用主要是

- 保留用户的使用习惯，包括语言与颜色主题
- 保留 token 用于更新

用户自身的信息是不保留在本地的，每次载入项目页面，已经保存的 token 会被用于请求获取包括 token 和用户信息的数据，必要的信息会被保存在状态树中。具体的流程参见[导航守卫](#导航守卫)。

当然，这种方案需要根据项目的实际情况进行调整。

Cookie 有着诸多限制和问题，不建议使用。

## 导航守卫

页面跳转时会触发导航守卫，详细代码参见 [@/guards](../../src/guards.js)。

本项目中使用了全局前置守卫和全局后置守卫，大致流程阐述如下。

全局前置守卫：

1.  启动 nprogress
2.  检查是否有 token，有 token 跳转到步骤 03，否则跳转到步骤 10
3.  检查是否前往登录页，是的话跳转到步骤 04，否则跳转到步骤 05
4.  跳转到仪表板页，流程结束
5.  检查状态树是否已经储存非 -1 的角色值，是的话跳转到步骤 06，否则跳转到步骤 07
6.  允许跳转，流程结束
7.  发送请求更新 token，更新成功则跳转到步骤 08，否则跳转到步骤 09，生成路由表具体流程参见[动态路由表的生成与挂载](#动态路由表的生成与挂载)
8.  重新触发导航守卫，流程结束
9.  跳转到登录页，记录原本要前往的页面，流程结束
10. 检查是否前往登录页，是的话跳转到步骤 06，否则跳转到步骤 09

全局前置守卫不能阻止用户主动访问异常页，鉴于这种可能性非常低，可以不再做相关的判断。

全局后置守卫只是简单地结束 nprogress。

## 路由

本项目采用的是比较严格的约定式路由，一来是为了简化路由渲染，减少需要考虑的情况，二来是结合我自身碰到的实际业务来看，路由不应该、也不会太过于繁琐与复杂。

一个路由项的结构如下所示（使用 TypeScript）。

```ts
interface IRoute {
  name: string; // 路由名称
  path: string; // 路由路径
  component?: () => Promise<typeof import("*.vue")> | VueConstructor<Vue>; // 异步引入组件/组件
  meta?: {
    roles?: number[]; // 角色数组，默认为 []，表示所有角色都能进入该路由
    title?: string; // 会被国际化处理的显示在抽屉导航的路由标题, 默认为 ''
    hidden?: boolean; // 路由是否不出现在抽屉导航中，默认为 false
    icon: string; // 深度一的路由 icon 名称，默认为 ''
  };
  children?: IRoute[]; // 子路由数组
}
```

本项目路由深度最大为 3：

- 深度 1：会在抽屉导航渲染为`v-list-item`组件或`v-list-group`组件
- 深度 2：会在抽屉导航渲染为`v-list-item`组件或`v-list-group`组件
- 深度 3：会在抽屉导航渲染为`v-list-item`组件

抽屉导航默认已经在预设的全局布局当中。

绝大多数情况下，深度 3 已经足够使用了。假如还要更大的深度，我认为应该要反过来思考是不是能够缩减路由深度。

用`route`表示某一路由项，其父母路由项为`parentRoute`，其子女路由为`childRoute`，用`routeDx`表示深度 x 的路由项，说明一些约定的规则，如下所示。注意：你需要按照规则进行自行配置，本项目只是按照这些规则进行了渲染。

- 面包屑的自动生成、预设的页面跳转均通过`route.name`完成，即`route.name`是必需的，同时其赋值需要遵循以下规则
  - `route.name` = `${parentRoute.name}-${route.path}`
  - 特例：`routeD1`没有`childRoute`或`childRoute`总数大于1，则`routeD1.name` = `routeD1.path.slice(1)`
  - 特例：`routeD1`的`childRoute`的总数为 1，则`routeD1.name`无需再填写，`childRoute.path`为空字符串，`childRoute.name` = `routeD1.path.slice(1)`
- `route.path`是字符串，要么是一个单词，要么为空
  - 特例：`routeD1.path`必须以`/`开头
- 除了某些用于调整抽屉导航显示的路由项（下面会提到），`route.component`是必需的
- `route.meta.title` = `drawer.${route.name}`
- `route.meta.hidden` 为 truthy 值时，`childRoute`一律不渲染，下面假如不特意指明，认为`route.meta.hidden`为 falsy 值
- 某一`routeD1`没有`childRoute`，则不会渲染到抽屉导航中，参考 [@/router/modules/authentication](../../src/router/modules/authentication.js)
- 某一`routeD1`的`childRoute`的总数为 1，则`childRoute.path`应为空字符串，渲染的抽屉导航项的信息优先取`childRoute`的信息，其次取`routeD1`的信息，参考 [@/router/modules/chart](../../src/router/modules/chart.js)
- 某一`routeD1`的`childRoute`的总数大于 1，则`routeD1`必然会被渲染，根据`childRoute.meta.hidden`决定`childRoute`是否渲染，参考 [@/router/modules/editor.js](../../src/router/modules/editor.js)
  - PS：`childRoute.meta.hidden`均为 truthy 值，则能展开`routeD1`，但不会渲染出`childRoute`
  - PPS：`childRoute.meta.hidden`只有一个为 falsy 值，则`routeD1`展开只有一个`childRoute`
- 任一`routeD2`的`childRoute`渲染情况，可以参考以上两条规则
  - 特别地，`routeD2`的`childRoute`，即`routeD3`，会根据`routeD3.meta.hidden`来确定是否渲染，参考 [@/router/modules/nested](../../src/router/modules/nested.js)

## 抽屉导航渲染路由

该部分涉及两个组件，一个是 [app-drawer-list](../../src/views/layout/components/AppDrawerList.vue)，一个是 [app-drawer-list-item](../../src/views/layout/components/AppDrawerListItem.vue)。

在`app-drawer-list`中，会获取允许该角色访问的路由表，并进行初次筛选：

- 筛除所有没有`childRoute`的`routeD1`
- 筛除所有`routeD1.meta.hidden`为 truthy 值的`routeD1`

没有`childRoute`字段的`routeD1`，其承载页面的组件必然是不需要依托在全局布局的组件，进一步地，这个页面也没有必要在抽屉导航中出现，如登录页`login`。

`routeD1.meta.hidden`为 truthy 值的`routeD1`，说明该路由项整个都需要隐藏，不会再考虑其子路由是否可见。

随后用得到的路由表（类型仍是`Route[]`）循环渲染`app-drawer-list-item`。

在`app-drawer-list-item`会更细颗粒地控制是否渲染路由项，下面假如不特意指明，默认`route.meta.hidden`为 falsy 值。

- `route`没有`childRoute`，则用`v-list-item`组件渲染，信息取`route`的信息，最内层的`route`匹配这种情况
- `route`的`childRoute`的总数为 1，则用`v-list-item`组件渲染，信息优先取`childRoute`的信息，其次取`route`的信息，一般而言，任意深度的`route`都可以匹配这种情况
- `route`的`childRoute`的总数大于 1，则用`v-list-group`组件渲染`route`，`childRoute`的渲染参考以上规则，一般来说，任意深度的`route`都可以匹配这种情况

## 路由深度

是不是路由深度最大就只能是 3 呢？实际上不然，只要遵循以上的规则，可以有无限层路由。

但是为什么建议最大是 3？一方面，在一定程度上限制了路由的数量。另一方面，vuetify 并没有考虑到更大深度的情况，如果需要更大的深度，需要自行进行定制。

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) 的侧边栏是无限递归的，如有需求可以前往查看。

## 动态路由的生成与挂载

请求登录接口和更新 token 接口（参见 [@/store/modules/user](../../src/store/modules/user.js) `loginAsync`和`renewTokenAsync`）成功后，会使用`setInfoSync`同步设置用户信息，随后通过`generateRoutesSync`同步生成动态路由表，接着调用 vue-router 的`addRoutes`api 挂载动态路由表。

`generateRoutesSync`会根据传入的用户角色来进行筛选。倘若用户角色能访问所有路由，直接返回所有动态路由`mutableRoutes`，否则调用`filterMutableRoutes`对`mutableRoutes`进行递归筛选。将所得的动态路由表`routesNeedAdd`保存到`state.routesNeedAdd`，并将静态路由表`immutableRoutes`与所得的动态路由表`routesNeedAdd`拼接得到完整路由表，保存到`state.routes`。挂载动态路由表时，使用`state.routesNeedAdd`即可。

`filterMutableRoutes`方法大概思路是遍历`mutableRoutes`。如果某个路由项是允许该用户角色访问的，检查该路由项有没有`children`，没有的话不用管，直接保存到新数组中，有的话递归处理，确保该路由项的`children`都是允许该用户角色访问的，最终也把处理后的路由项保存到新数组中。最终得到的新数组，便是允许该用户角色访问的路由表。详见 [@/utils/user](../../src/utils/user.js)。

## 重置路由

动态路由表的重置涉及到 vue-router 的原理，此处不详细描述。直接参见代码 [@/router/index](../../src/router/index.js)`resetRouter`方法。

## 工具类、工具方法、工具函数

本项目会封装简单的工具类、工具方法、工具函数到`@/utils`文件夹下。假如比较复杂，建议搜索看是否有现成库可以使用。为缩减打包体积，可以配置`externals`。
