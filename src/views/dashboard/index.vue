<template>
  <v-container fluid>
    <v-row no-gutters>
      <h3>dashboard</h3>
    </v-row>
    <v-row align="center" justify="start">
      <v-col xl="6" lg="6" md="6" sm="6">
        <v-card>
          <v-card-title>Project Situation</v-card-title>
          <v-card-text>
            <span>Stars: {{ stars }}</span>
            <br />
            <span v-if="languages.length === 0">
              Languages: Fetching
            </span>
            <template v-else>
              <span
                v-for="(value, key) in languages"
                :key="key"
              >
                {{ key }}: {{ value }}<br />
              </span>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="6">
        <v-card>
          <v-card-title>Count</v-card-title>
          <v-card-text>
            <count-to
              ref="countTo"
              :autoplay="false"
              :startVal="startVal"
              :endVal="endVal"
              :duration="duration"
            />
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="handleStart">{{ $t('btn.start') }}</v-btn>
            <v-btn text @click="handlePause">{{ $t('btn.pause') }}</v-btn>
            <v-btn text @click="handleReset">{{ $t('btn.reset') }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  data () {
    return {
      startVal: 0,
      endVal: 2222,
      duration: 3000
    }
  },
  computed: {
    stars () {
      return this.$store.getters['publicApi/stars']
    },
    languages () {
      return this.$store.getters['publicApi/languages']
    }
  },
  methods: {
    handleStart () {
      this.$refs.countTo.start()
    },
    handlePause () {
      this.$refs.countTo.pause()
    },
    handleReset () {
      this.$refs.countTo.reset()
    }
  },
  mounted () {
    this.$store.dispatch('publicApi/getStarsAsync')
    this.$store.dispatch('publicApi/getLanguagesAsync')
  }
}
</script>
