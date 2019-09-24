<template>
  <router-view :key="this.$route.path" />
</template>

<script>
export default {
  // load language and theme
  mounted () {
    this.$i18n.locale = this.$store.getters['user/language']
    this.$vuetify.theme.dark = this.$store.getters['user/theme'] === 'dark'
  }
}
</script>

<style lang="scss">
.v-breadcrumbs__item {
  color: white !important;
}

.v-breadcrumbs {
  &.theme--light .v-breadcrumbs__item--disabled {
    color: rgba(0, 0, 0, 0.38) !important;
  }

  &.theme--dark .v-breadcrumbs__item--disabled {
    color: rgba(255, 255, 255, 0.5) !important;
  }
}
</style>
