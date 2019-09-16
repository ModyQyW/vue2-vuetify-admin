<template>
  <v-app
    :light="theme === 'light'"
    :dark="theme === 'dark'"
  >
    <v-content>
      <v-container
        align-center
        justify-center
        fill-height
      >
        <v-form
          class="login-form"
          ref="loginForm"
          v-model="valid"
        >
          <v-layout
            align-center
            justify-center
          >
            <span class="title">{{ $t('hint.projectName') }}</span>
          </v-layout>
          <v-layout
            align-center
            justify-center
          >
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
          </v-layout>
          <v-text-field
            v-model="username"
            :rules="usernameRules"
            :label="$t('hint.username')"
            required
            autofocus
            clearable
          />
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            :label="$t('hint.password')"
            required
            clearable
            type="password"
          />
          <v-layout
            v-if="redirect"
            align-center
            justify-center
          >
            <v-alert type="error" dense>
              {{ $t('hint.loginAgain') }}
            </v-alert>
          </v-layout>
          <v-layout
            align-center
            justify-center
          >
            <v-btn
              :disabled="btnDisabled"
              color="primary"
              @click="handleLogin"
            >
              <template v-if="!btnDisabled">
                {{ $t('btn.login') }}
              </template>
              <v-progress-circular
                v-else
                indeterminate
                :size="24"
                color="primary"
              />
            </v-btn>
            <v-btn
              :disabled="btnDisabled"
              @click="handleReset"
            >
              {{ $t('btn.reset') }}
            </v-btn>
          </v-layout>
        </v-form>
      </v-container>
    </v-content>
    <v-snackbar v-model="isShowSnackbar">
      {{ $t(snackbarI18nText) }}
      <v-btn
        color="primary"
        @click="isShowSnackbar = false"
      >
        {{ $t('btn.close') }}
      </v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
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
      valid: true,
      username: '',
      usernameRules: [
        v => !!v || this.$t('hint.usernameRequired')
      ],
      password: '',
      passwordRules: [
        v => !!v || this.$t('hint.passwordRequired')
      ],
      btnDisabled: false,
      isShowSnackbar: false,
      snackbarI18nText: ''
    }
  },
  computed: {
    language () {
      return this.$store.getters['user/language']
    },
    theme () {
      return this.$store.getters['user/theme']
    },
    redirect () {
      return this.$route.query.redirect
    }

  },
  methods: {
    handleChangeLanguage (language) {
      this.$store.commit('user/setLanguage', { language })
    },
    handleChangeTheme (theme) {
      this.$store.commit('user/setTheme', { theme })
    },
    handleLogin () {
      // validate
      if (this.$refs.loginForm.validate()) {
        this.btnDisabled = true
        this.$store.dispatch('user/loginAsync', {
          username: this.username,
          password: this.password
        }).then((res) => {
          if (res.success) {
            this.$router.replace({ name: this.redirect || 'dashboard' })
          } else {
            this.snackbarI18nText = res.msg
            this.isShowSnackbar = true
          }
          this.btnDisabled = false
        })
      }
    },
    handleReset () {
      this.$refs.loginForm.reset()
    }
  },
  watch: {
    language (newLanguage) {
      this.$refs.loginForm.resetValidation()
      this.usernameRules = [
        v => !!v || this.$t('hint.usernameRequired')
      ]
      this.passwordRules = [
        v => !!v || this.$t('hint.passwordRequired')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  width: 300px;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

.btn-loader {
  display: flex;
  animation: loader 1s infinite;
}
</style>
