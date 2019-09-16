<template>
  <!-- app-bar -->
  <v-app-bar app color="primary">
    <v-app-bar-nav-icon
      @click.stop="handleToggleShowDrawer"
    />
    <v-toolbar-title>
      <a
        class="text-uppercase"
        :class="{
          'white--text': theme === 'dark',
          'black--text': theme === 'light'
        }"
        href="https://github.com/ModyQyW/vue-vuetify-admin"
      >
        vue-vuetify-admin
      </a>
    </v-toolbar-title>
    <v-spacer />
    <v-menu offset-y transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>language</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="language in languagesList"
          :key="language.value"
          @click="handleChangeLanguage(language.value)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ language.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-menu offset-y transition="slide-y-transition">
      <template v-slot:activator="{ on }">
        <v-btn
          icon
          v-on="on"
        >
          <v-icon>invert_colors</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="theme in themesList"
          :key="theme.value"
          @click="handleChangeTheme(theme.value)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ $t(theme.name) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn
      icon
      v-if="enableFullscreen"
      @click="handleToggleFullscreen"
    >
      <v-icon>{{ fullscreenIcon }}</v-icon>
    </v-btn>
    <v-btn
      icon
      @click="handleToGithub"
    >
      <v-icon>fab fa-github</v-icon>
    </v-btn>
    <v-btn
      icon
      @click="handleLogout"
    >
      <v-icon>fa fa-sign-out-alt</v-icon>
    </v-btn>
    <v-snackbar v-model="isShowSnackbar">
      {{ $t(snackbarI18nText) }}
      <v-btn
        color="primary"
        @click="isShowSnackbar = false"
      >
        {{ $t('btn.close') }}
      </v-btn>
    </v-snackbar>
  </v-app-bar>
</template>

<script>
import screenfull from 'screenfull'

export default {
  props: {
    theme: {
      type: String,
      required: true
    },
    handleToggleShowDrawer: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      isFullscreen: false,
      enableFullscreen: screenfull.enabled,
      languagesList: [{
        name: '简体中文',
        value: 'zh-Hans'
      }, {
        name: 'English',
        value: 'en'
      }],
      themesList: [{
        name: 'themes.light',
        value: 'light'
      }, {
        name: 'themes.dark',
        value: 'dark'
      }],
      isShowSnackbar: false,
      snackbarI18nText: ''
    }
  },
  computed: {
    language () {
      return this.$store.getters['user/language']
    },
    fullscreenIcon () {
      return this.isFullscreen ? 'fullscreen_exit' : 'fullscreen'
    }
  },
  mounted () {
    this.isFullscreen = screenfull.isFullscreen
    screenfull.on('change', () => {
      this.isFullscreen = screenfull.isFullscreen
    })
  },
  methods: {
    handleChangeLanguage (language) {
      this.$store.commit('user/setLanguage', { language })
    },
    handleChangeTheme (theme) {
      this.$store.commit('user/setTheme', { theme })
    },
    handleToggleFullscreen () {
      screenfull.toggle()
    },
    handleToGithub () {
      window.location = 'https://github.com/ModyQyW/vue-vuetify-admin'
    },
    handleLogout () {
      this.$store.dispatch('user/logoutAsync')
        .then((res) => {
          if (res.success) {
            this.$router.replace({ name: 'login' })
          } else {
            this.snackbarI18nText = res.msg
            this.isShowSnackbar = true
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.v-app-bar {
  left: 0 !important;
}
</style>
