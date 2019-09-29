import $req from '@/utils/request'

const publicApi = {
  namespaced: true,
  state: {
    /**
     * @description project stars, also for fetching status
     * @type {String}
     */
    stars: 'Fetching',
    /**
     * @description project languages
     * @type {Object[]}
     */
    languages: []
  },
  getters: {
    stars: state => state.stars,
    languages: state => state.languages
  },
  mutations: {
    /**
     * @description set project stars number
     * @param {Object} state
     * @param {Object} annoymous
     * @param {String} annoymous.stars
     */
    setStarsSync (state, { stars }) {
      state.stars = stars
    },

    /**
     * @description set project languages list
     * @param {Object}   state
     * @param {Object}   annoymous
     * @param {Object[]} annoymous.languages
     */
    setLanguagesSync (state, { languages }) {
      state.languages = languages
    }
  },
  actions: {
    /**
     * @description get project stars from github
     * @param {Object}   context
     * @param {Object}   context.state
     * @param {Function} context.commit
     */
    getStarsAsync ({ state, commit }) {
      if (state.stars === 'Fetching' || state.stars === 'Failed') {
        $req.get('https://api.github.com/repos/ModyQyW/vue-vuetify-admin')
          .then((res) => {
            if (Object.prototype.toString.call(res.stargazers_count).slice(8, -1) === 'Number') {
              commit('setStarsSync', { stars: res.stargazers_count.toString() })
            } else {
              commit('setStarsSync', { stars: 'Failed' })
            }
          })
      }
    },
    /**
     * @description get project languages from github
     * @param {Object}   context
     * @param {Object}   context.state
     * @param {Function} context.commit
     */
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
