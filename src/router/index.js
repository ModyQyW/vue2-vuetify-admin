import Vue from 'vue'
import Router from 'vue-router'
// default routes
import { immutableRoutes } from './routes'

Vue.use(Router)

/**
 * @description create router
 */
const createRouter = () => new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  routes: immutableRoutes
})

const router = createRouter()

export default router

/**
 * @description reset router
 */
export const resetRouter = () => {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
