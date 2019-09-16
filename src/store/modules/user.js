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

const user = {
  namespaced: true,
  state: {
    // user id
    // 用户 id
    id: -1,
    // user name
    // 用户名称
    username: '',
    // user nickname
    // 用户昵称
    nickname: '',
    // user role
    // 用户角色
    role: -1,
    // language
    // 语言
    language: getLanguage(),
    // theme
    // 主题
    theme: getTheme(),
    // routes needed to add
    // 需要添加的路由项
    routesNeedAdd: [],
    // all routes for this user
    // 对应该用户的所有路由
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
    // generate routes
    // 生成路由表
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
    // reset routes
    // 重设路由表
    resetRoutesSync (state) {
      state.routesNeedAdd = []
      state.routes = []
      resetRouter()
    },
    // set info
    // 设置相关信息
    setInfoSync (state, data) {
      state.id = data.id
      state.username = data.username
      state.nickname = data.nickname
      state.role = data.role
    },
    // set language
    // 设置语言
    setLanguage (state, { language }) {
      state.language = language
      i18n.locale = language
      setLanguage({ language })
    },
    // set theme
    // 设置主题
    setTheme (state, { theme }) {
      state.theme = theme
      vuetify.framework.theme.dark = theme === 'dark'
      setTheme({ theme })
    }
  },
  actions: {
    // log in
    // 登录
    loginAsync ({ commit, state }, { username, password }) {
      return $req.post('/auth/login', {
        username,
        password
      }).then((res) => {
        const { success } = res
        if (success) {
          // login successfully, save token and related info
          // 登录成功，保存 token 和相关信息
          const { data: { token, id, username, nickname, role } } = res
          setToken({ token })
          commit('setInfoSync', { id, username, nickname, role })
          commit('generateRoutesSync', { role })
          router.addRoutes(state.routesNeedAdd)
        }
        return res
      })
    },
    // log out
    // 退出登录
    logoutAsync ({ commit }) {
      return $req.post('/auth/logout')
        .then((res) => {
          const { success } = res
          if (success) {
            removeToken()
            commit('resetRoutesSync')
          }
          return res
        })
    },
    // renew token
    // 更新 token 状态
    renewTokenAsync ({ commit, state }) {
      return $req.post('/auth/renew')
        .then((res) => {
          const { success } = res
          if (success) {
            // renew successfully, save token and related info
            // 更新成功，保存 token 和相关信息
            const { data: { token, id, username, nickname, role } } = res
            setToken({ token })
            commit('setInfoSync', { id, username, nickname, role })
            commit('generateRoutesSync', { role })
            router.addRoutes(state.routesNeedAdd)
          } else {
            // renew failed, remove token
            // no need to reset router
            // 更新失败，移除 token
            // 没有必要重置路由
            removeToken()
          }
          return res
        })
    }
  }
}

export default user
