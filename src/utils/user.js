/* language */
const languageKey = 'language'

const defaultLanguage = 'en'

/**
 * get project language
 * 获取项目语言
 * @returns { String }
 */
const getLanguage = () => window.localStorage.getItem(languageKey) || defaultLanguage

/**
 * set project language, persistence
 * 设置项目语言，持久化
 * @param { String } { language = defaultLanguage }
 */
const setLanguage = ({ language = defaultLanguage }) => {
  window.localStorage.setItem(languageKey, language)
}

/**
 * remove project setting language
 * 移除项目当前设置的语言
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
 * detect whether the route matches the role
 * 检测路由项与角色是否匹配
 * @param { Object } route
 * @param { String= } route.name
 * @param { String } route.path
 * @param { Object } route.meta
 * @param { Number[]= } route.meta.roles
 * @param { String= } route.meta.title
 * @param { Boolean= } route.meta.hidden
 * @param { String= } route.meta.icon
 * @param { Object[]= } route.children
 * @param { Number } role
 * @returns { Boolean }
 */
const hasPermission = (route, role) => {
  // the route has meta and meta.roles prop
  // 路由项有 meta 和 meta.roles
  if (route.meta && route.meta.roles) {
    return route.meta.roles.includes(role)
  }
  // the route has no meta or meta.roles prop
  // 路由项没有 meta 或 meta.roles
  return true
}

/**
 * filter mutable routes
 * 筛选动态路由
 * @param { Object[] } routes
 * @param { String= } routes[].name
 * @param { String } routes[].path
 * @param { Object } routes[].meta
 * @param { Number[]= } routes[].meta.roles
 * @param { String= } routes[].meta.title
 * @param { Boolean= } routes[].meta.hidden
 * @param { String= } routes[].meta.icon
 * @param { Object[]= } routes[].children
 * @param { Number } role
 * @returns { Object[] }
 */
const filterMutableRoutes = (routes, role) => {
  const res = []
  // forEach judge
  // forEach 判断
  routes.forEach((route) => {
    const tmp = { ...route }
    // detect whether the route matches the role
    // 检测路由项与角色是否匹配
    if (hasPermission(tmp, role)) {
      if (tmp.children) {
        // recursion
        // 递归
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
