<template>
  <!-- app-bar -->
  <v-app-bar app color="primary">
    <v-app-bar-nav-icon
      @click.stop="handleToggleShowDrawer"
    />
    <v-toolbar-title>
      <a
        class="text-uppercase white--text"
        href="https://github.com/ModyQyW/vue-vuetify-admin"
      >
        vue-vuetify-admin
      </a>
    </v-toolbar-title>
    <v-breadcrumbs
      class="d-none d-md-flex"
      :items="breadcrumbs"
    >
      <template v-slot:item="props">
        <v-breadcrumbs-item
          :exact="props.item.exact"
          :to="props.item.to"
          :disabled="props.item.disabled"
        >
          {{ props.item.text }}
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
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
      enableFullscreen: screenfull.isEnabled,
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
    },
    breadcrumbs () {
      const breadcrumbs = this.$route.path.split('/').filter(item => item.length > 0)
      for (let i = 1, len = breadcrumbs.length; i < len; i += 1) {
        breadcrumbs[i] = `${breadcrumbs[i - 1]}-${breadcrumbs[i]}`
        breadcrumbs[i - 1] = {
          text: this.$t(`drawer.${breadcrumbs[i - 1]}`),
          exact: true,
          disabled: false,
          to: { name: breadcrumbs[i - 1] }
        }
        if (i === len - 1) {
          breadcrumbs[i] = {
            text: this.$t(`drawer.${breadcrumbs[i]}`),
            exact: true,
            disabled: true,
            to: { name: breadcrumbs[i] }
          }
        }
      }
      return breadcrumbs
    }
  },
  mounted () {
    this.isFullscreen = screenfull.isFullscreen
    screenfull.on('change', () => {
      this.isFullscreen = screenfull.isFullscreen
    })
    console.log('this.breadcrumbs', this.breadcrumbs)
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
          if (res.suc) {
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
