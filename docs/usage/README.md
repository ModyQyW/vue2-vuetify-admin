# Usage

```js
// TODO: improve this document :(
// For now, this is based on Google Translation.
```

Using a template developed by someone else is not a one-off thing. The goal of this document is to help you get started and target secondary development.

## Tools

It is recommended to use VSCode for development.

Here are the plugins I personally use.

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

The configuration I personally use is given below.

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

## Language

This project was developed using JavaScript, supplemented by [JSDoc](https://jsdoc.app/).

The main goal of using JavaScript is to lower the threshold for getting started. This project will be refactored with TypeScript in the future.

## ProjectStructure

```md
├── docs                   documents
│   ├── usage              usage documents
│   |   ├── README.CN.md
│   │   ├── README.md
├── node_modules           dependencies
├── public                 html page template
├── src
│   ├── assets             assets
│   ├── components         global components
│   ├── layout             global layout
│   ├── locales            internationalization json files
│   ├── mixins             mixins
│   │   ├── nprogress.scss nprogress style
│   ├── plugins            plugins mounted to a vue instance
│   │   ├── i18n.js        internationalization plugin
│   │   ├── vuetify.js     vuetify plugin
│   ├── router             router mounted to a vue instance
│   │   ├── modules        router modules
│   │   ├── index.js       expose a route instance and a reset method
│   │   ├── routes.js      combine router modules
│   ├── store              vuex mounted to a vue instance
│   │   ├── modules        vuex modules
│   │   ├── index.js       expose a vuex instance
│   ├── utils              utils used by serval files
│   │   ├── request.js     pack axios
│   │   ├── user.js        user personal habits and token persistence
│   ├── views              page files
│   ├── App.vue            page entry, modify global styles, initial personal habits
│   ├── guards.js          router navigation guards
│   ├── main.js            mount
├── .editorconfig          editor configuration
├── .env                   specify environment variables for all environments
├── .gitignore             git ignore patterns
├── babel.config.js        babel configuration
├── CONTRIBUTING.md
├── LICENSE
├── package.json           declare dependencies and commands
├── README.CN.md
├── README.md
├── vue.config.js          vue-cli configuration
└── yarn.lock              lock dependencies' versions
```

## GlobalComponents

A global component should be a component that is required by several pages or components. Using components within the community and vuetify is sufficient gennerlly, but the need for custom components can't be eliminated still.

If the custom component is used in only one page, you should create a new `components` folder in the corresponding page folder and put the custom component, refer to `@/layout`. If it is used in multiple pages, It should be placed in `@/components`.

## Internationalization

Two languages are currently available: English and Simplified Chinese.

To add and use more fields:

- Add the corresponding fields and interpretations to all internationalized json files
- Use `this.$t('fieldName')` to get corresponding interpretations on the page

To add and use more languages：

- Create a new file named `${language}.json` in `@/locales`
- Add corresponding fields and interpretations to the new file

## NetworkRequest

The project uses packed axios for network requests, as detailed in the case of [@/utils/request](../../src/utils/request.js). All parameters can be adjusted to the actual project situation.

The request is made by calling axios through the store's `dispatch` method.

After the request is made, the decision is made whether the return value is returned based on the actual situation. If the request is needed to decide what to do next, it is recommended to return a value, refer to [@/store/modules/user](../../src/store/modules/user.js) and [@/views/login](../../src/views/login/index.vue); if not, it is recommended that do not return a value, refer to [@/store/modules/publicApi](../../src/store/modules/publicApi.js) and [@/views/dashboard](../../src/views/dashboard/index.vue).

## SavingData

The data in a vuex store should be required by several pages or components. At the same time, you should consider abandoning vuex, if the project doesn't have many pages.

LocalStorage and vuex store are used to save required data in this project.

localStorage is mainly used to

- Save user's habits, including languages and themes
- Save token to renew

The user's information is not kept locally, and each time the project page is loaded, the saved token is used to request to get data, including new token and the user's information. Necessary information will be saved in the vuex store. The specific process can be found in [NavigationGuard](#NavigationGuards).

Of course, such a programme would need to be adapted to the actual situation of the project.

Cookies have many limitations and problems and are not recommended.

## NavigationGuards

The navigation guards are triggered when the page jumps. See the details of [@/guards](../../src/guards.js).

A global before guard and a global after hook are used in this project, and the general process is described below.

The global before guard：

1.  start nprogress
2.  Check for token, jump to step 03 if there is one , otherwise jump to step 10
3.  Check if going to the login page, jump to step 04 if yes, otherwise jump to step 05
4.  Jump to the dashboard page, process ends
5.  Check that the vuex store has stored a role value but not -1, jump to step 06 if yes, otherwise jump to step 07
6.  Allow jumping, process ends
7.  Request to renew token, jump to step 08 if succeeded, otherwise jump to step 09, check [Generate&MountMutableRoutes](#Generate&MountMutableRoutes) for details
8.  Trigger navigation guards again, process ends
9.  Jump to the login page, record the page supposed to jump to, process ends
10. Check if going to the login page, jump to step 06 if yes, otherwise jump to step 09

The global before guard cannot prevent users from jumping to exception pages proactively. It's fine not to making the relevant judgment given the low probability.

The global after hook just stops nprogress simply.

## Routes

A strict conventional routing is used in this project in order to simplify routes rendering and reduce situations to consider. Besides, routing should not be cumbersome and complex, according to my experience.

The structure of a route is shown below (using TypeScript).

```ts
interface IRoute {
  name: string; // route name
  path: string; // route path
  component?: () => Promise<typeof import("*.vue")> | VueConstructor<Vue>; // 异步引入组件/组件
  meta?: {
    roles?: number[]; // an array of role, default [], meaning that every role can visit this route
    title?: string; // the route name, will be dealed with i18n and shown in drawer navigation, default ''
    hidden?: boolean; // if the route will not be shown in drawer navigation, default false
    icon: string; // the icon name of route for depth 1, default ''
  };
  children?: IRoute[]; // an array of child routes子路由数组
}
```

The max depth of routes for this project is 3.

- depth 1: render `v-list-item` component or `v-list-group` component in the drawer navigation
- depth 2: render `v-list-item` component or `v-list-group` component in the drawer navigation
- depth 3: render `v-list-item` component in the drawer navigation

Use `route` to represent a route, whose parent route is `parentRoute` and child route is `childRoute`, and `routeDx` to represent a route for depth x, in order to explain some conventional rules below. Attention: You need to configure yourself according to these rules, and this project is simply rendered according to these rules.

- The automatic generation of breadcrumbs and preset page jumps are done through `route.name`, which means `route.name` is required. Meanwhile, `route.name` is following the rules below.
  - `route.name` = `${parentRoute.name}-${route.path}`.
  - Specially, `routeD1.name` = `routeD1.path.slice(1)` when `routeD1` has no `childRoute` or more than 1 `childRoute`.
  - Specially, `routeD1.name` should not be filled when `routeD1` has one `childRoute`.
  - Specially, `routeD1.path` should start with `/`.
- `route.component` is required except for some routes used to adjust the drawer navigation.
- `route.meta.title` = `drawer.${route.name}` (in internationalization files).
- `childRoute` will not be rendered when `route.meta.hidden` is truty and `route.meta.hidden` is considered to be falsy if not specifically specified below.
- A `routeD1` will not be rendered in the drawer navigation when it has no `childRoute`, refer to [@/router/modules/authentication](../../src/router/modules/authentication.js).
- The `childRoute.path` should be `''`, rendering information uses `childrRoute`'s information first then `routeD1`'s information, when a `routeD1` has one `childRoute`, refer to [@/router/modules/chart](../../src/router/modules/chart.js).
- A `routeD1` must be rendered in the drawer navigation when it has more than 1 `childRoute`, rendering `childRoute` or not depends on `childrRoute.meta.hidden`, refer to [@/router/modules/editor.js](../../src/router/modules/editor.js).
  - PS: `routeD1` can be expanded but show no `childRoute` if `childRoute.meta.hidden` are all truthy.
  - PPS: `routeD1` can expanded and show one `childRoute` if one `childRoute.meta.hidden` is falsy.
- A `routeD2`'s `childRoute` rendering can refer to rules above
  - Specially, `routeD2`'s `childRoute`, `routeD3`, will be determined rendering or not by `routeD3.meta.hidden`, refer to [@/router/modules/nested](../../src/router/modules/nested.js).

## RenderRoutesInDrawerNavigation

This section involves two components, one is [app-drawer-list](../../src/views/layout/components/AppDrawerList.vue) and the other is [app-drawer-list-item](.. /../src/views/layout/components/AppDrawerListItem.vue).

In the `app-drawer-list`, the routing table that allows access to the role is obtained and the initial filtering is performed:

- Screen out all `routeD1` without `childRoute`
- Screen out all `routeD1` for the truthy value of `routeD1.meta.hidden`

Without the `childRoute` field of `routeD1`, the component that hosts the page must be a component that does not need to rely on the global layout. Further, this page does not need to appear in the drawer navigation, such as the login page `login`.

`routeD1.meta.hidden` is the 'routeD1` of the truthy value, indicating that the routing entry needs to be hidden entirely, and will not consider whether its sub-routes are visible.

Then use the resulting routing table (type is still `Route[]`) to loop render `app-drawer-list-item`.

In `app-drawer-list-item`, it will control the routing items more finely. If you don't specify it, the `route.meta.hidden` is the falsy value by default.

- `route` does not have `childRoute`, it is rendered with the `v-list-item` component, the information takes the information of `route`, and the innermost `route` matches this situation.
- The total number of `childRoute` of `route` is 1, and it is rendered with the `v-list-item` component. The information takes the information of `childRoute` first, followed by the information of `route`. In general, `route` of any depth can match this situation.
- The total number of `childRoute` of `route` is greater than 1, then render `route` with the `v-list-group` component. The rendering of `childRoute` refers to the above rules. In general, `route` at any depth can match this situation.

## RoutesDepth

Is the routing depth only 3? In fact, as long as the above rules are followed, there can be an infinite layer of routing.

But why is the maximum recommended 3? On the one hand, it limits the number of routes to some extent. Vuetify, on the other hand, does not take into account the greater depth, which needs to be customized if it is required.

[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin) sidebars are infinitely recursive and can be viewed if needed.

## Generate&MountMutableRoutes

After successully requesting api of the login and the api of updating the token (see [@/store/modules/user](../../src/store/modules/user.js) `loginAsync` and `renewTokenAsync`), use `setInfoSync` to set user information synchronously. Then generate a dynamic routing table by `generateRoutesSync` synchronously, then call the ven-router's `addRoutes` api to mount the dynamic routing table.

`generateRoutesSync` will filter based on the incoming user role. If the user role can access all routes, return all dynamic routes `mutableRoutes` directly, otherwise call `filterMutableRoutes` to recursively filter `mutableRoutes`. Save the resulting dynamic routing table `routesNeedAdd` to `state.routesNeedAdd`, and concatenating the static routing table `immutableRoutes` with the resulting dynamic routing table `routesNeedAdd` to get the complete routing table and save it to `state.routes`. When mounting a dynamic routing table, use `state.routesNeedAdd`.

The general idea of ​​the `filterMutableRoutes` method is to traverse `mutableRoutes`. If a route is allowed to be accessed by the user role, check if the routing entry has a `children`. If not, save it to the new array, otherwise recursively process `children` and ensure that the `children` is allowed to be accessed by the user role, and finally the result route is also saved to the new array. The resulting new array is the routing table that the user role is allowed to access. See [@/utils/user](../../src/utils/user.js) for details.

## ResetRoutes

The reset of the dynamic routing table relates to the principle of vue-router, which is not described in detail her. See `resetrouter` method in [@/router/index](../../src/router/index.js).

## Utils

This project encapsulates simple tool classes, tool methods and tool functions in `@/utils` folder. It is recommended that you search to see if there is an out-of-the-box library available if what you need is complex. `externals` can be configured to reduce the package size.
