const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const resolve = dir => path.join(__dirname, dir)
const isProd = process.env.NODE_ENV === 'production'
const prodGzipExt = ['html', 'js', 'css', 'json', 'ttf', 'eot', 'otf', 'woff', 'woff2', 'svg', 'png',
  'gif', 'jpg', 'jpeg', 'bmp', 'webp', 'webm', 'flv', 'ogg', 'wav', 'mp3', 'mp4']

module.exports = {
  // public path
  // if deploy on https://www.abc.com/, set L14 to '/'
  // if deploy on https://www.abc.com/def/, set L14 to '/def/'
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

  configureWebpack: (config) => {
    if (isProd) {
      // externals
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        moment: 'moment'
      }
      // add plugins
      config.plugins.push(
        // gzip
        new CompressionWebpackPlugin({
          test: new RegExp(`\\.(${prodGzipExt.join('|')})$`),
          threshold: 0
        })
      )
    }
  },

  chainWebpack: (config) => {
    // set alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@c', resolve('src/components'))
      .set('@a', resolve('src/assets'))
    // split chunks
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
