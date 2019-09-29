import NProgress from 'nprogress'
import router from '@/router'
import store from '@/store'
import '@/utils/nprogress.css'

import { authenticationRouteSet } from '@/router/routes'
import { getToken } from '@/utils/user'

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  const hasToken = !!getToken()
  if (hasToken) {
    // has token
    // 存在 token
    if (authenticationRouteSet.has(to.path)) {
      // attempts to visit login page => visit dashboard
      // 前往登录页 => 前往 dashboard
      next({
        name: 'dashboard',
        replace: true
      })
    } else {
      // attempts to visit non-login page => check if has role
      // 前往非登录页 => 检查是否有 role
      if (store.getters['user/role'] !== -1) {
        // 有 role => 路由表已生成，访问不存在的页面会跳转到 404
        // has role => the routes have been generated and visit 404 when visit pages not exist
        next()
      } else {
        // token is still available => renew token
        // 试图更新 token
        const renewTokenRes = await store.dispatch('user/renewTokenAsync')
        if (renewTokenRes.suc) {
          // renew successfully and get role => generate mutable routes for this role, add those routes to router, and trigger the guard
          // 更新成功，同时获取到 role => 生成动态路由表，添加到路由上，重新触发导航守卫
          next({
            ...to,
            replace: true
          })
        } else {
          // renew failed => auto remove token, visit login page, record the page attempting to visit
          // 更新失败 => token 自动被移除，跳转到登录页，记录原本要前往的页面
          next({
            name: 'login',
            replace: true,
            query: { redirect: to.name }
          })
        }
      }
    }
  } else {
    // has no token
    // 没有 token
    if (authenticationRouteSet.has(to.path)) {
      // visit login page => allow
      // 前往登录页 => 允许
      next()
    } else {
      // visit non-login page => visit login-page, record the page attempting to visit
      // consider the possibility of the user actively accessing the abnormal page to 0
      // no longer make the relevant judgment
      // 前往非登录页 => 跳转到登录页，记录原本要前往的页面
      // 视用户主动访问异常页的可能性为 0
      // 不再做相关判断
      next({
        name: 'login',
        replace: true,
        query: { redirect: to.name }
      })
    }
  }
})

router.afterEach((to, from) => {
  NProgress.done()
})
