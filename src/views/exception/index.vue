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
        flex-column
      >
        <v-container
          align-center
          justify-center
          d-flex
        >
          <b>{{ text }}</b>
        </v-container>
        <v-container
          align-center
          justify-center
          d-flex
        >
          <v-btn @click="handleBack">{{ $t('btn.dashboard') }}</v-btn>
        </v-container>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  },
  computed: {
    theme () {
      return this.$store.getters['user/theme']
    }
  },
  mounted () {
    switch (this.$route.name) {
      case '401':
        this.text = '401 Unauthorized'
        break
      case '403':
        this.text = '403 Forbidden'
        break
      case '404':
        this.text = '404 Not Found'
        break
      case '500':
        this.text = '500 Internal Server Error'
        break
      case '502':
        this.text = '502 Bad Gateway'
        break
      default:
        this.text = 'Unknown Error'
        break
    }
  },
  methods: {
    handleBack () {
      this.$router.replace({ name: 'dashboard' })
    }
  }
}
</script>
