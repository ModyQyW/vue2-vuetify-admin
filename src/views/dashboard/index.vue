<template>
  <v-container>
    <p>dashboard</p>
    <count-to
      ref="countTo"
      :autoplay="false"
      :startVal="startVal"
      :endVal="endVal"
      :duration="duration"
    />
    <v-btn @click="handleStart">{{ $t('btn.start') }}</v-btn>
    <v-btn @click="handlePause">{{ $t('btn.pause') }}</v-btn>
    <v-btn @click="handleReset">{{ $t('btn.reset') }}</v-btn>
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
  }
}
</script>
