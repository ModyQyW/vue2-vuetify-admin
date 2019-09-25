<template>
  <v-container>
    <v-alert type="warning" dense>
      You better check <a href="https://github.com/surmon-china/vue-quill-editor">vue-quill-editor docs</a> and <a href="https://quilljs.com/docs/quickstart/">quill-editor docs</a> for more usage.
    </v-alert>
    <rich-text-editor
      class="rich-text-editor"
      v-model="editorContent"
      ref="ref"
      :options="editorOptions"
    />
  </v-container>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor as RichTextEditor } from 'vue-quill-editor'

export default {
  components: {
    RichTextEditor
  },
  data () {
    return {
      editorContent: '',
      editorOptions: {
        theme: 'snow'
      }
    }
  },
  computed: {
    editorRef () {
      return this.$refs.ref.quill
    }
  }
}
</script>

<style lang="scss">
.rich-text-editor {
  min-height: 256px;
  max-height: 100%;

  .ql-toolbar {
    height: 72px;
  }

  .ql-container {
    min-height: 184px;

    .ql-editor {
      min-height: 183px;
    }
  }
}
</style>
