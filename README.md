# vue2-vuetify-admin

**DEPRECATED!**

**Better choice: [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin), [vue-vuetify-admin](https://github.com/NelsonEAX/vue-vuetify-admin), [vue-admin-vuetify](https://github.com/vasttian/vue-admin-vuetify), [vuetify-admin-dashboard](https://github.com/ClintOxx/vuetify-admin-dashboard).**

A simple admin template with huge potential, built with Vue family and Vuetify UI library.

English | [简体中文](README.CN.md)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#Deployment) for notes on how to deploy the project on a live system.

### Prerequisites

- Using nvm, node lts, npm lts and yarn is recommended
  - Follow the links below and install nvm first
    - [nvm for Mac/Linux](https://github.com/nvm-sh/nvm)
    - [nvm-windows](https://github.com/coreybutler/nvm-windows)
    - Using [Homebrew](https://brew.sh/) to install nvm on Mac is **NOT** recommended
  - Then install node lts in terminal / command line

    ```sh
    nvm install --lts
    ```

  - Globally update npm to lts and install yarn

    ```sh
    npm i -g npm@lts
    npm i -g yarn
    ```

  - If you are Chinese, maybe you should set mirrors
- Git is also required
  - [git for Windows/Linux](https://git-scm.com/downloads)
  - Using [Homebrew](https://brew.sh/) to install git on Mac is recommended

### Installing

```sh
# terminal / command line 1
# clone the project
git clone git@github.com:ModyQyW/vue2-vuetify-admin.git

# enter the project directory
cd vue2-vuetify-admin

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

## Running the tests

No tests now. Pull requests are welcome.

## Deployment

- Open [vue.config.js](./vue.config.js) and set L14
- Open [request.js](./src/utils/request.js) and set L6
- Uncomment [public/index.html](./public/index.html) L33-37 (You should comment L33-37 when developing)
- Run `yarn build`(for legacy build) or `yarn build --modern`(for modern build) and get `dist` folder
- Upload `dist` folder content to your server
- Configure your server

You can get more information on [vue-cli Browser Compatibility](https://cli.vuejs.org/guide/browser-compatibility.html) and [vue-cli Deployment](https://cli.vuejs.org/guide/deployment.html).

## Built With

- [vue-cli](https://cli.vuejs.org/) - Standard tooling for Vue.js development, using to initial this project
- [vue](https://vuejs.org) - A progressive JavaScript framework
- [vuex](https://vuex.vuejs.org/) - A state management pattern + library for Vue.js applications
- [vue-router](https://router.vuejs.org/) - The official router for Vue.js
- [vuetify](https://vuetifyjs.com/en/) - A material design component framework for Vue.js
- [vue-i18n](https://kazupon.github.io/vue-i18n/) - Internationalization plugin for Vue.js
- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [dayjs](https://github.com/iamkun/dayjs) - 2KB immutable date library alternative to [Moment.js](https://momentjs.com/docs/) with the same modern API
- [nprogress](https://github.com/rstacruz/nprogress) - Minimalist progress bar
- [screenfull](https://github.com/sindresorhus/screenfull.js) - Simple wrapper for cross-browser usage of the JavaScript Fullscreen API
- [vue-count-to](https://github.com/PanJiaChen/vue-countTo) - Count to a target number at a specified duration
- [vue-echarts](https://github.com/ecomfe/vue-echarts) - [ECharts](https://echarts.apache.org/en/index.html) component for Vue.js
- [vue-quill-editor](https://github.com/surmon-china/vue-quill-editor) - [quill editor](https://github.com/quilljs/quill) component for Vue.js
- [toast-ui.vue-editor](https://github.com/nhn/toast-ui.vue-editor) - [Toast UI Editor](https://github.com/nhn/tui.editor) for Vue
- [jszip](https://stuk.github.io/jszip/) - A javascript library for creating, reading and editing .zip files, with a lovely and simple API
- [file-saver](https://github.com/eligrey/FileSaver.js/) - An HTML5 `saveAs()` FileSaver implementation
- [vuedraggable](https://github.com/SortableJS/Vue.Draggable) - Vue drag-and-drop component based on [Sortable.js](https://github.com/SortableJS/Sortable)
- [xlsx](https://www.npmjs.com/package/xlsx) - Parser and writer for various spreadsheet formats
- [xss](https://jsxss.com/en/index.html) - Sanitize untrusted HTML (to prevent XSS) with a configuration specified by a Whitelist
- [eslint](https://eslint.org) - An open source project provided a pluggable linting utility for JavaScript, using [standard](https://standardjs.com/) in the project
- [sass](https://github.com/sass/dart-sass) - A pure JavaScript implementation of [Sass](https://sass-lang.com/)
- [stylelint](https://stylelint.io/) - A mighty, modern linter that helps you avoid errors and enforce conventions in your styles

## Features

- Responsive
- Authentication
  - Page permission
- I18n: English & Simplified Chinese
- Two themes: light and dark
- Three-level routing, corresponding to three-level drawer navigation
- Screenfull
- Exception pages
- Charts
- Draggable todo list
- Editor
  - Markdown editor
  - Rich text editor
- File: save & zip

## Browsers Support

Please read [package.json](./package.json) for details. You can get actual supported browsers on [browserl.ist](https://browserl.ist/?q=%3E0.25%25+and+last+2+versions+and+not+dead).

The default setting of vue-cli is showing below.

```sh
>1%
last 2 versions
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on code of conduct, and the process for submitting pull requests.

## Versioning

Use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/ModyQyW/vue2-vuetify-admin/releases).

## Authors

- **Rui Wu** - *Initial work* - [ModyQyW](https://github.com/ModyQyW)

See also the list of [contributors](https://github.com/ModyQyW/vue2-vuetify-admin/contributors) who participated in this project.

## License

[MIT](./LICENSE)

Copyright (c) 2019-present ModyQyW

## Acknowledgments

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)
- [iview-admin](https://github.com/iview/iview-admin)
- [ant-design-pro-vue](https://github.com/sendya/ant-design-pro-vue)
- [d2-admin](https://github.com/d2-projects/d2-admin)
