const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const IS_PROD = process.env.NODE_ENV === 'production'
const cdnDomian = './'
module.exports = {
  publicPath: IS_PROD ? cdnDomian : './',

  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // // #region 忽略生成环境打包的文件
      // var externals = {
      //   vue: 'Vue',
      //   axios: 'axios',
      //   'vue-router': 'VueRouter',
      //   vuex: 'Vuex'
      // }
      // config.externals(externals)
      // const cdn = {
      //   css: [],
      //   js: [
      //     // vue
      //     '//cdn.staticfile.org/vue/2.5.22/vue.min.js',
      //     // vue-router
      //     '//cdn.staticfile.org/vue-router/3.0.2/vue-router.min.js',
      //     // vuex
      //     '//cdn.staticfile.org/vuex/3.1.0/vuex.min.js',
      //     // axios
      //     '//cdn.staticfile.org/axios/0.19.0-beta.1/axios.min.js',
      //   ]
      // }
      // config.plugin('html')
      //   .tap(args => {
      //     args[0].cdn = cdn
      //     return args
      //   })
      // // #endregion

      // #region 分析打包体积
      // if (process.env.IS_ANALYZE) {
      //   config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
      //     {
      //       analyzerMode: 'static'
      //     }
      //   ])
      // }
      // #endregion 分析打包体积
    }
  },

  lintOnSave: false,

  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },

  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
