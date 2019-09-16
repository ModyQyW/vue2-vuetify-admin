<template>
  <router-view :key="this.$route.path" />
</template>

<script>
export default {
  // load language and theme
  // 读取语言与主题
  mounted () {
    this.$i18n.locale = this.$store.getters['user/language']
    this.$vuetify.theme.dark = this.$store.getters['user/theme'] === 'dark'
  }
}
</script>
