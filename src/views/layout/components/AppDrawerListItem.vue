<template>
  <!-- the parent has no child -->
  <v-list-item
    v-if="!route.children && isShown(route)"
    link
    :to="{ name: route.name }"
  >
    <v-list-item-title>
      {{
        $t(
          route.meta
            ? (route.meta.title || 'drawer.anonymous')
            : 'drawer.anonymous'
        )
      }}
    </v-list-item-title>
    <v-list-item-icon>
      <v-icon>
        {{
          route.meta
            ? (route.meta.icon || '')
            : ''
        }}
      </v-icon>
    </v-list-item-icon>
  </v-list-item>
  <!-- the parent has only one child -->
  <v-list-item
    v-else-if="route.children && route.children.length === 1 && isShown(route)"
    link
    :to="{ name: route.children[0].name  }"
  >
    <v-list-item-icon>
      <v-icon>
        {{
          (route.children[0].meta && route.children[0].meta.icon)
          || (route.meta && route.meta.icon)
          || ''
        }}
      </v-icon>
    </v-list-item-icon>
    <v-list-item-title>
      {{
        $t(
          route.children[0].meta
            ? (route.children[0].meta.title || 'drawer.anonymous')
            : ''
        )
      }}
      </v-list-item-title>
  </v-list-item>
  <!-- the parent has more than one child -->
  <v-list-group
    v-else-if="route.children && route.children.length > 1 && isShown(route)"
    :prepend-icon="route.meta.icon"
    no-action
    :sub-group="subGroup"
    :value="getListGroupValue({ route })"
  >
    <template v-slot:activator>
      <v-list-item-title>
        {{
          $t(
            route.meta
              ? (route.meta.title || 'drawer.anonymous')
              : 'drawer.annoymous'
          )
        }}
      </v-list-item-title>
    </template>
    <app-drawer-list-item
      v-for="route of route.children"
      :key="route.path"
      :route="route"
      :subGroup="true"
    />
  </v-list-group>
</template>

<script>
export default {
  name: 'AppDrawerListItem',
  props: {
    route: {
      type: Object,
      required: true
    },
    subGroup: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    routePath () {
      return this.$route.path
    }
  },
  methods: {
    getListGroupValue ({ route }) {
      if (this.routePath.indexOf(route.path) >= 0) {
        return true
      }
      return false
    },
    isShown (route) {
      return !route.meta || (route.meta && !route.meta.hidden)
    }
  }
}
</script>
