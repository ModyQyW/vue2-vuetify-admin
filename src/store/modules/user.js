import Vue from 'vue'
import router, { resetRouter } from '@/router'
import { immutableRoutes, mutableRoutes } from '@/router/routes'
import i18n from '@/i18n'
import vuetify from '@/plugins/vuetify'
import {
  setToken,
  removeToken,
  getLanguage,
  setLanguage,
  getTheme,
  setTheme,
  filterMutableRoutes
} from '@/utils/user'

const { $req } = Vue.prototype

/**
 * @typedef Route
 * @property name        {String}    route name
 * @property path        {String}    route path, required
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
 *
 * @typedef Result
 * @property suc {Boolean}
 * @property msg {String}
 */

const user = {
  namespaced: true,
  state: {
    /**
     * @description user id
     * @type {Number}
     */
    id: -1,
    /**
     * @description user name
     * @type {String}
     */
    username: '',
    /**
     * @description user nickname
     * @type {String}
     */
    nickname: '',
    /**
     * @description user role
     * @type {Number}
     */
    role: -1,
    /**
     * @description user language
     * @type {String}
     */
    language: getLanguage(),
    /**
     * @description user theme
     * @type {String}
     */
    theme: getTheme(),
    /**
     * @description routes need to add
     * @type {Object[]}
     */
    routesNeedAdd: [],
    /**
     * @description all routes for this user
     * @type {Route[]}
     */
    routes: []
  },
  getters: {
    id: state => state.id,
    username: state => state.username,
    nickname: state => state.nickname,
    role: state => state.role,
    language: state => state.language,
    theme: state => state.theme,
    routesNeedAdd: state => state.routesNeedAdd,
    routes: state => state.routes
  },
  mutations: {
    /**
     * @description generate routes
     * @param {Object} state
     * @param {Object} annoymous
     * @param {Number} annoymous.role
     */
    generateRoutesSync (state, { role }) {
      let routesNeedAdd
      if (role === 0) {
        routesNeedAdd = mutableRoutes || []
      } else {
        routesNeedAdd = filterMutableRoutes(mutableRoutes, role)
      }
      // console.log('immutableRoutes', immutableRoutes)
      // console.log('routesNeedAdd', routesNeedAdd)
      state.routesNeedAdd = routesNeedAdd
      state.routes = immutableRoutes.concat(routesNeedAdd)
    },
    /**
     * @description reset routes
     * @param {Object} state
     */
    resetRoutesSync (state) {
      state.routesNeedAdd = []
      state.routes = []
      resetRouter()
    },
    /**
     * @description set related info
     * @param {Object} state
     * @param {Object} annoymous
     * @param {Number} annoymous.id
     * @param {String} annoymous.username
     * @param {String} annoymous.nickname
     * @param {Number} annoymous.role
     */
    setInfoSync (state, { id, username, nickname, role }) {
      state.id = id
      state.username = username
      state.nickname = nickname
      state.role = role
    },
    /**
     * @description set language
     * @param {Object} state
     * @param {Object} annoymous
     * @param {String} annoymous.language
     */
    setLanguage (state, { language }) {
      state.language = language
      i18n.locale = language
      setLanguage({ language })
    },
    /**
     * @description set theme
     * @param {Object} state
     * @param {Object} annoymous
     * @param {String} annoymous.theme
     */
    setTheme (state, { theme }) {
      state.theme = theme
      vuetify.framework.theme.dark = theme === 'dark'
      setTheme({ theme })
    }
  },
  actions: {
    /**
     * @description login
     * @param {Object}   context
     * @param {Object}   context.state
     * @param {Function} context.commit
     * @param {Object}   annoymous
     * @param {String}   annoymous.username
     * @param {String}   annoymous.password
     * @return {Promise.<Result>}
     */
    loginAsync ({ state, commit }, { username, password }) {
      return $req.post('/auth/login', {
        username,
        password
      }).then((res) => {
        const { suc } = res
        if (suc) {
          // login successfully, save token and related info
          const { data: { token, id, username, nickname, role } } = res
          setToken({ token })
          commit('setInfoSync', { id, username, nickname, role })
          commit('generateRoutesSync', { role })
          router.addRoutes(state.routesNeedAdd)
        }
        return res
      })
    },
    /**
     * @description logout
     * @param {Object}   context
     * @param {Function} context.commit
     * @return {Promise.<Result>}
     */
    logoutAsync ({ commit }) {
      return $req.post('/auth/logout')
        .then((res) => {
          const { suc } = res
          if (suc) {
            removeToken()
            commit('resetRoutesSync')
          }
          return res
        })
    },
    /**
     * @description login
     * @param {Object}   context
     * @param {Object}   context.state
     * @param {Function} context.commit
     * @return {Promise.<Result>}
     */
    renewTokenAsync ({ commit, state }) {
      return $req.post('/auth/renew')
        .then((res) => {
          const { suc } = res
          if (suc) {
            // renew successfully, save token and related info
            const { data: { token, id, username, nickname, role } } = res
            setToken({ token })
            commit('setInfoSync', { id, username, nickname, role })
            commit('generateRoutesSync', { role })
            router.addRoutes(state.routesNeedAdd)
          } else {
            // renew failed, remove token
            // no need to reset router
            removeToken()
          }
          return res
        })
    }
  }
}

export default user
