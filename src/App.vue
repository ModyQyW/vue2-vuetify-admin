<template>
  <router-view />
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
/* stylelint-disable selector-class-pattern */
.v-breadcrumbs__item {
  color: #fff !important;
}

.v-breadcrumbs {
  &.theme--light .v-breadcrumbs__item--disabled {
    color: rgba(0, 0, 0, .38) !important;
  }

  &.theme--dark .v-breadcrumbs__item--disabled {
    color: rgba(255, 255, 255, .5) !important;
  }
}
</style>
