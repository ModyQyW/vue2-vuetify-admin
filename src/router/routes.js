import authenticationRoutes from './modules/authentication'
import chartRoutes from './modules/chart'
import dashboardRoutes from './modules/dashboard'
import editorRoutes from './modules/editor'
import fileRoutes from './modules/file'
import nestedRoutes from './modules/nested'
import exceptionRoutes from './modules/exception'
import todoRoutes from './modules/todo'

// a set for authentication routes using for judgement
export const authenticationRouteSet = new Set(authenticationRoutes.map(route => route.path))

// a set for exception routes using for judgement
export const exceptionRouteSet = new Set(exceptionRoutes.map(route => route.path))

/**
 * route structure
 * suggested max depth: 3
 * depth 1: shown as v-list-item or v-list-group in the drawer navigation
 * depth 2: shown as v-list-item or v-list-group in the drawer navigation
 * depth 3: shown as v-list-item
 *
 * @typedef Route
 * @property name        {String}    route name
 * @property path        {String}    route path
 * @property component   {(Function|Component)}
 *                                   route component showing the page
 * @property meta        {Object}
 * @property meta.roles  {Number[]}  an array of roles, default [], meaning that
 *                                   every role can visit
 * @property meta.title  {String}    a string for title, will be dealed with i18n,
 *                                   default empty string
 * @property meta.hidden {Boolean}   hide in the drawer navigation or not, default
 *                                   false
 * @property meta.icon   {String}    a string of depth 1 route icon name, default
 *                                   empty string
 * @property children    {Route[]}   an array of routes
 *
 * you can get more information in docs/usage/README.md
 */

/**
 * @description the routes for every role
 */
export const immutableRoutes = [
  ...authenticationRoutes,
  ...exceptionRoutes,
  ...dashboardRoutes,
  ...chartRoutes,
  ...editorRoutes,
  ...todoRoutes,
  ...fileRoutes,
  ...nestedRoutes
]

/**
 * @description the routes for specific role
 *              use 404 to match all the other pages
 *              so 404 should be the last one
 */
export const mutableRoutes = [
  {
    path: '*',
    redirect: { name: '404' },
    meta: {
      hidden: true
    }
  }
]
