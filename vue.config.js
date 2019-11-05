const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const StylelintWebpackPlugin = require('stylelint-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
const prodGzipExt = ['html', 'js', 'css', 'json', 'ttf', 'eot', 'otf', 'woff', 'woff2', 'svg', 'png',
  'gif', 'jpg', 'jpeg', 'bmp', 'webp', 'webm', 'flv', 'ogg', 'wav', 'mp3', 'mp4']

module.exports = {
  chainWebpack: (config) => {
    // set alias
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('@a', path.resolve(__dirname, 'src', 'assets'))
      .set('@c', path.resolve(__dirname, 'src', 'components'))
      .set('@m', path.resolve(__dirname, 'src', 'mixins'))
      .set('@u', path.resolve(__dirname, 'src', 'utils'))
    // split chunks
    config.when(
      isProd,
      (config) => {
        config.optimization
          .splitChunks({
            chunks: 'all',
            cacheGroups: {
              libs: {
                chunks: 'initial',
                name: 'chunk-libs',
                priority: 10,
                test: /[\\/]node_modules[\\/]/
              },
              vuetify: {
                name: 'chunk-vuetify',
                priority: 20,
                test: /[\\/]node_modules[\\/]_?vuetify(.*)/
              },
              comp: {
                minChunks: 3,
                name: 'chunk-comp',
                priority: 5,
                reuseExistingChunk: true,
                test: path.resolve('src', 'components')
              }
            }
          })
      }
    )
  },

  configureWebpack: (config) => {
    config.plugins.push(
      // stylelint
      new StylelintWebpackPlugin({
        files: ['src/**/*.{vue,htm,html,css,sss,less,scss}'],
        formatter: require('stylelint-codeframe-formatter')
      })
    )
    if (isProd) {
      // externals
      config.externals = {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios'
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

  devServer: {
    port: 4001
    // handle cors: if proxy is set, set local axios's baseUrl to ''
    // proxy: 'localhost:3000'
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  },

  // no .map files
  productionSourceMap: false,

  // public path
  // if deploy on https://www.abc.com/, set L14 to '/'
  // if deploy on https://www.abc.com/def/, set L14 to '/def/'
  publicPath: isProd
    ? '/' // production
    : '/', // development

  // vuetify and vue-echarts
  transpileDependencies: ['vuetify', 'vue-echarts', 'resize-detector']
}
