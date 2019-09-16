<template>
  <!-- app-drawer-list -->
  <v-list dense>

    <v-list-item
      link
      @click="handleToggleExpandDrawer"
    >
      <v-list-item-icon>
        <v-icon>{{ miniIcon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-title>{{ $t('drawer.narrow') }}</v-list-item-title>
    </v-list-item>

    <app-drawer-list-item
      v-for="route of routes"
      :key="route.path"
      :route="route"
    />

  </v-list>
</template>

<script>
import AppDrawerListItem from './AppDrawerListItem'

export default {
  components: {
    AppDrawerListItem
  },
  props: {
    drawerMini: {
      type: Boolean,
      required: true
    },
    handleToggleExpandDrawer: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      item: null
    }
  },
  computed: {
    miniIcon () {
      return this.drawerMini ? 'chevron_right' : 'chevron_left'
    },
    routes () {
      return this.$store.getters['user/routes'].filter((route) => {
        return route.children && (!route.meta || (route.meta && !route.meta.hidden))
      })
    }
  },
  watch: {
    item (newVal, oldVal) {
      console.log('newVal', newVal)
    }
  }
}
</script>
