const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)
const isProd = process.env.NODE_ENV === 'production'
const prodGzipExt = ['html', 'js', 'css', 'json', 'ttf', 'eot', 'otf', 'woff', 'woff2', 'svg', 'png',
  'gif', 'jpg', 'jpeg', 'bmp', 'webp', 'webm', 'flv', 'ogg', 'wav', 'mp3', 'mp4']

module.exports = {
  // public path
  publicPath: isProd
    ? '/' // production
    : '/', // development

  // dev server
  devServer: {
    port: 4001
    // handle cors: if proxy is set, set local axios's baseUrl to ''
    // proxy: 'localhost:3000'
  },

  // no .map files
  productionSourceMap: false,

  // vuetify and vue-echarts
  transpileDependencies: ['vuetify', 'vue-echarts', 'resize-detector'],

  pluginOptions: {
    // stylelint
    lintStyleOnBuild: true,
    // i18n
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  // split packages
  configureWebpack: (config) => {
    if (isProd) {
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        moment: 'moment'
      }
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: new RegExp(`\\.(${prodGzipExt.join('|')})$`),
          threshold: 0
        })
      )
    }
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@a', resolve('src/assets'))
    // https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-template-compiler/README.md#%E9%80%89%E9%A1%B9
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
    config.when(
      isProd,
      (config) => {
        config.optimization
          .splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                name: 'chunk-libs',
                test: /[\\/]node_modules[\\/]/,
                priority: 10,
                chunks: 'initial'
              },
              vuetify: {
                name: 'chunk-vuetify',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?vuetify(.*)/
              }
            }
          })
      }
    )
  }
}
