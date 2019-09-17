import Vue from 'vue'

const { $req } = Vue.prototype

const publicApi = {
  namespaced: true,
  state: {
    stars: 'Fetching',
    languages: []
  },
  getters: {
    stars: state => state.stars,
    languages: state => state.languages
  },
  mutations: {
    setStarsSync (state, { stars }) {
      state.stars = stars
    },
    setLanguagesSync (state, { languages }) {
      state.languages = languages
    }
  },
  actions: {
    getStarsAsync ({ state, commit }) {
      if (state.stars === 'getting' || state.stars === 'failed') {
        $req.get('https://api.github.com/repos/ModyQyW/vue-vuetify-admin')
          .then((res) => {
            if (Object.prototype.toString.call(res.stargazers_count).slice(8, -1) === 'Number') {
              commit('setStarsSync', { stars: res.stargazers_count })
            } else {
              commit('setStarsSync', { stars: 'failed' })
            }
          })
      }
    },
    getLanguagesAsync ({ state, commit }) {
      if (state.languages.length === 0) {
        $req.get('https://api.github.com/repos/ModyQyW/vue-vuetify-admin/languages')
          .then((res) => {
            if (res['Vue'] > 0) {
              let total = 0
              const keys = Object.keys(res)
              keys.forEach((key) => {
                total += res[key]
              })
              console.log('total', total)
              keys.forEach((key) => {
                res[key] = `${(res[key] / total * 100).toFixed(2)}%`
              })
              commit('setLanguagesSync', { languages: { ...res } })
            }
          })
      }
    }
  }
}

export default publicApi
