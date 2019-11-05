import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import i18n from '@/plugins/i18n'
import vuetify from '@/plugins/vuetify'

import '@/guards'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
