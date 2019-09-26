<template>
  <v-container>
    <v-alert type="warning" dense>
      You had better check <a href="https://github.com/eligrey/FileSaver.js">file-saver</a> and <a href="https://stuk.github.io/jszip/">jszip</a> for more usage.
    </v-alert>
    <v-row>
      <v-col sm="12" class="d-flex justify-center">
        <img
          ref="ref"
          class="img"
          crossorigin="annoymous"
          :src="imgSrc"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="6">
        <v-text-field
          v-model="imgSrc"
          label="imgSrc"
          clearable
        >
          {{ imgSrc }}
        </v-text-field>
      </v-col>
      <v-col sm="3">
        <v-text-field
          v-model="imgName"
          label="imgName"
          clearable
        >
          {{ imgName }}
        </v-text-field>
      </v-col>
      <v-col sm="3">
        <v-switch v-model="isZip" label="isZip"></v-switch>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-btn
        :disabled="isBtnDisabled"
        @click="handleSave"
      >
        {{ $t('btn.save') }}
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { saveAs } from 'file-saver'
import JSZip from 'jszip'

export default {
  data () {
    return {
      imgSrc: 'https://placekitten.com/256/256',
      imgName: 'kitten-256.png',
      isZip: true,
      isBtnDisabled: false
    }
  },
  methods: {
    async handleSave () {
      this.isBtnDisabled = true
      if (this.isZip) {
        const ref = this.$refs.ref
        const canvas = document.createElement('canvas')
        canvas.width = ref.width
        canvas.height = ref.height
        const ctx = canvas.getContext('2d')
        ctx.drawImage(ref, 0, 0)
        let dataUrl = canvas.toDataURL('image/png', 1)
        const base64Ind = dataUrl.indexOf('base64,')
        const isBase64 = base64Ind >= 0
        if (isBase64) {
          dataUrl = dataUrl.slice(base64Ind + 7)
        }
        const jszip = new JSZip()
        jszip.file(this.imgName, dataUrl, { base64: isBase64 })
        await jszip.generateAsync({ type: 'blob' })
          .then((content) => {
            saveAs(content, 'example.zip')
          })
      } else {
        saveAs(this.imgSrc, this.imgName)
      }
      this.isBtnDisabled = false
    }
  }
}
</script>

<style lang="scss" scoped>
.img {
  display: block;
  width: 256px;
  height: 256px;
}
</style>
