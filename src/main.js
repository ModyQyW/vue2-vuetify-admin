import Vue from 'vue'
import vuetify from '@/plugins/vuetify'
import i18n from './i18n'
import '@/plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'

import './guards'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
