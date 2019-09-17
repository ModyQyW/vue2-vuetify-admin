import Vue from 'vue'
import Vuex from 'vuex'

import publicApi from './modules/publicApi'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    publicApi,
    user
  }
})
