# Usage

// TODO: improve my poor English and complete this document :(

Using a template developed by someone else is not a one-off thing. The goal of this document is to help you get started and target secondary development.

## Tools

It is recommended to use VSCode for development.

Here are the plugins I personally use.

- [aiXcoder](https://www.aixcoder.com/)
- Ant Design Snippets
- Auto Close Tag
- Beautify
- Bootstrap 4, Font awesome 4, Font Awesome 5 & Pro snippets
- Bracket Pair Colorizer 2
- Code Runner
- Codelf
- CodeSandbox
- Comment Translate
- CSS Peek
- Document This
- ESLint
- filesize
- GitLens
- HTML Snippets
- HTMLHint
- Icon Fonts
- Icon Fonts (Legacy)
- Import Cost
- IntelliSense for CSS class names in HTML
- JavaScript (ES6) code snippets
- jQuery Code Snippets
- LeetCode
- Live Server
- Lorem ipsum
- Markdown All in One
- Markdown Preview Enhanced
- markdownlint
- minapp
- Path Autocomplete
- Path Intellisense
- Prettier
- Project Manager
- React Native Tools
- React-Native/React/Redux snippets for es6/es7
- Sorting HTML and Jade attributes
- TODO Highlight
- TSLint
- TypeScript Hero
- TypeScript Importer
- Vetur
- vscode-element-helper
- vscode-fileheader
- vscode-icons
- Vue Peek
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
  "css.validate": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
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
  "eslint.autoFixOnSave": true,
  "eslint.options": {
    "experimentalDecorators": true
  },
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true,
    },
    {
      "language": "javascriptreact",
      "autoFix": true,
    },
    {
      "language": "typescript",
      "autoFix": true,
    },
    {
      "language": "typescriptreact",
      "autoFix": true,
    },
    {
      "language": "html",
      "autoFix": true
    },
    {
      "language": "vue",
      "autoFix": true
    }
  ],
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
    "**/*.html",
    "**/*.php",
    "**/*.css",
    "**/*.scss",
    "**/*.vue",
    "**/*.styl"
  ],
  "todohighlight.isEnable": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.js": "vscode-typescript",
  "window.zoomLevel": -0.5,
  "workbench.iconTheme": "vscode-icons",
  "workbench.startupEditor": "newUntitledFile",
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "[javascript]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[json]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "workbench.colorTheme": "Default Light+",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "commentTranslate.targetLanguage": "zh-CN",
  "commentTranslate.multiLineMerge": true
}
```

## Language

This project was developed using JavaScript, supplemented by [JSDoc](https://jsdoc.app/).

The main goal of using JavaScript is to lower the threshold for getting started.

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
│   ├── locales            internationalization json files
│   ├── layout             global layout
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
│   │   ├── nprogress.css  nprogress style
│   │   ├── request.js     pack axios
│   │   ├── user.js        user personal habits and token persistence
│   ├── views              page files
│   ├── App.vue            page entry, modify global styles, initial personal habits
│   ├── guards.js          router navigation guards
│   ├── main.js            mount
├── .editorconfig          editor configuration
├── .env                   specify environment variables for all environments
├── .gitignore             git ignore patterns
├── .stylelintignore       stylelint ignore patterns
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

A global component should be a component that is required by several pages or components. Using components within the community and vuetify is sufficient gennerlly, but you the need for custom components cannot be eliminated still.

If the custom component is used only in one page, you should create a new components folder in the corresponding page folder and put the custom component, refer to `@/layout`; if it is used in multiple pages, It should be placed in `@/components`.

## Internationalization

Two languages are currently available: English and Chinese Simplified.

To add and use more fields:

- Add the corresponding fields and interpretations to all internationalized json files
- Use `this.$t('fieldName')` to get corresponding interpretations on the page

To add and use more languages：

- Create a new file named `${language}.json` in `@/locales`
- Add corresponding fields and interpretations to the file

## NetworkRequest

The project uses packed axios for network requests, as detailed in the case of [@/utils/request](../../src/utils/request.js). All parameters can be adjusted to the actual project situation.

The request is made by calling axios through the store's `dispatch` method.

After the request is made, the decision is made whether the return value is returned based on the actual situation. If the request is needed to decide what to do next, it is recommended to return a value, refer to [@/store/modules/user](../../src/store/modules/user.js) and [@/views/login](../../src/views/login/index.vue); if not, it is recommended that do not return a value, refer to [@/store/modules/publicApi](../../src/store/modules/publicApi.js) and [@/views/dashboard](../../src/views/dashboard/index.vue).

## SavingData

The data in a vuex store should be required by several pages or components. At the same time, you should consider abandoning the state tree, if the project doesn't have many pages.

Use localStorage and vuex store to save the required data in the project for now.

localStorage is mainly used to

- Save usage habits, including languages and themes
- Save token to renew

The user's information is not kept locally, and each time the project page is loaded, the saved token is used to request to get data, including the token and the user's information. Necessary information will be saved in vuex stores. The specific process can be found in [NavigationGuard](#NavigationGuards).

Of course, such a programme would need to be adapted to the actual situation of the project.

Cookies have many limitations and problems and are not recommended.

## NavigationGuards

The navigation guards are triggered when the page jumps. See the details of [@/guards](../../src/guards.js).

A global before guard and a global after hook are used in this project, and the general process is described below.

The global before guard：

1.  start nprogress
2.  Check for token, jump to step 03 if there is token , otherwise jump to step 10
3.  Check if going to the login page, jump to step 04 if yes, otherwise jump to step 05
4.  Jump to the dashboard page, process ends
5.  Check that the vuex store has stored a role value but not -1, jump to step 06 if yes, otherwise jump to step 07
6.  Allow jumping, process ends
7.  Request to renew token, jump to step 08 if succeeded, otherwise jump to step 09, check [Generate&MountMutableRoutes](#Generate&MountMutableRoutes) for details
8.  Trigger navigation guards again, process ends
9.  Jump to the login page, record the page supposed to jump to, process ends
10. Check if going to the login page, jump to step 06 if yes, otherwise jump to step 09

The global before guard cannot prevent users from jumping to exception pages proactively. But given the very low probability, it's fine to stop making the relevant judgment.

The global after hook just stops nprogress simply.

## Routes

TODO: translate

## RenderRoutesInDrawerNavigation

TODO: translate

## RoutesDepth

TODO: translate

## Generate&MountMutableRoutes

TODO: translate

## ResetRoutes

TODO: translate

## Utils

TODO: translate
