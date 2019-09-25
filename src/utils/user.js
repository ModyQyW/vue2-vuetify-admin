/* language */
const languageKey = 'language'

const defaultLanguage = 'en'

/**
 * @description get project language
 * @return {String} language
 */
const getLanguage = () => window.localStorage.getItem(languageKey) || defaultLanguage

/**
 * @description set project language, persistence
 * @param {Object} annoymous
 * @param {String} annoymous.language
 */
const setLanguage = ({ language = defaultLanguage }) => {
  window.localStorage.setItem(languageKey, language)
}

/**
 * @description remove project setting language
 */
const removeLanguage = () => {
  window.localStorage.removeItem(languageKey)
}

/* theme */
const themeKey = 'theme'

const defaultTheme = 'light'

const getTheme = () => window.localStorage.getItem(themeKey) || defaultTheme

const setTheme = ({ theme = defaultTheme }) => {
  window.localStorage.setItem(themeKey, theme)
}

const removeTheme = () => window.localStorage.removeItem(themeKey)

/* token */
const tokenKey = 'token'

const defaultToken = ''

const getToken = () => window.localStorage.getItem(tokenKey) || defaultToken

const setToken = ({ token = defaultToken }) => {
  window.localStorage.setItem(tokenKey, token)
}

const removeToken = () => window.localStorage.removeItem(tokenKey)

/* permission and routes */

/**
 * @typedef Route
 * @property name        {String}    route name
 * @property path        {String}    route path, required
 * @property component   {String}    route component, required
 * @property meta        {Object}
 * @property meta.roles  {Number[]}  an array for roles, default [], meaning that
 *                                   every role can visit
 * @property meta.title  {String}    a string for title, default empty string, will
 *                                   be dealed with i18n, should be set personally
 *                                   if it will be shown in the drawer
 * @property meta.hidden {Boolean}   hide in the drawer or not, default false
 * @property meta.icon   {String}    a string for icon name, default empty string,
 *                                   should be set personally if it will be shown
 *                                   in the drawer
 * @property children    {Route[]}
 */

/**
 * @descriptiondetect whether the route matches the role
 * @param {Route}    route
 * @param {Number}   role
 * @return {Boolean}
 */
const hasPermission = (route, role) => {
  // the route has meta and meta.roles prop
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  }
  // the route has no meta or meta.roles prop
  return true
}

/**
 * @description filter mutable routes
 * @param {Route[]}   routes
 * @param {Number}    role
 * @returns {Route[]}
 */
const filterMutableRoutes = (routes, role) => {
  const res = []
  // forEach judge
  routes.forEach((route) => {
    const tmp = { ...route }
    // detect whether the route matches the role
    if (hasPermission(tmp, role)) {
      if (tmp.children) {
        // recursion
        tmp.children = filterMutableRoutes(tmp.children, role)
      }
      res.push(tmp)
    }
  })
  return res
}

export {
  getLanguage,
  setLanguage,
  removeLanguage,
  getTheme,
  setTheme,
  removeTheme,
  getToken,
  setToken,
  removeToken,
  filterMutableRoutes
}
