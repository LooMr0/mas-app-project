// 路由文件
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = []
const routerContext = require.context('./', true, /index\.js$/)
routerContext.keys().forEach(route => {
  // 根目录路由 index.js 不处理
  if (route.startsWith('./index')) {
    return
  }
  const routerModule = routerContext(route)
  /**
   * 兼容import export 和 require module.export 两种规范
   */
  routes = [...routes, ...(routerModule.default || routerModule)]
})

export default new Router({
  mode: 'hash',
  base: process.env.BABEL_URL,
  routes: routes
})
