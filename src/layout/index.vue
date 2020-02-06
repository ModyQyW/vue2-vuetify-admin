<template>
  <v-app
    :light="theme === 'light'"
    :dark="theme === 'dark'"
  >
    <!-- app-bar -->
    <app-bar
      :theme="theme"
      :handleToggleShowDrawer="handleToggleShowDrawer"
    />

    <!-- app-drawer -->
    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="drawerMini"
    >
      <app-drawer-list
        :drawerMini="drawerMini"
        :handleToggleExpandDrawer="handleToggleExpandDrawer"
      />
    </v-navigation-drawer>

    <!-- app-content -->
    <v-content app>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'
import AppDrawerList from './components/AppDrawerList'

export default {
  components: {
    AppBar,
    AppDrawerList
  },
  data () {
    return {
      drawer: null,
      drawerMini: false
    }
  },
  computed: {
    theme () {
      return this.$store.getters['user/theme']
    }
  },
  methods: {
    handleToggleShowDrawer () {
      this.drawer = !this.drawer
    },
    handleToggleExpandDrawer () {
      this.drawerMini = !this.drawerMini
    }
  }
}
</script>

<style lang="scss" scoped>
.v-navigation-drawer {
  top: 64px !important;
  max-height: calc(100% - 64px) !important;
}
</style>
