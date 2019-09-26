<template>
  <v-container>
    <v-alert type="warning" dense>
      You had better check <a href="https://github.com/nhn/toast-ui.vue-editor">toast-ui.vue-editor</a> and <a href="https://github.com/nhn/tui.editor">tui.editor</a> for more usage.
    </v-alert>
    <v-row justify="space-around">
      <v-switch v-model="isVertical" label="isVertical"></v-switch>
      <v-switch v-model="isMarkdown" label="isMarkdown"></v-switch>
      <v-text-field
        v-model="editorHeight"
        label="editorHeight"
        clearable
        :rules="editorHeightRules"
        style="max-width: 200px;"
      >
        {{ editorHeight }}
      </v-text-field>
    </v-row>
    <markdown-editor
      v-model="editorContent"
      :height="editorHeight"
      :mode="editorMode"
      :previewStyle="editorPreviewStyle"
    />
  </v-container>
</template>

<script>
import 'tui-editor/dist/tui-editor.css'
import 'tui-editor/dist/tui-editor-contents.css'
import 'codemirror/lib/codemirror.css'
import { Editor as MarkdownEditor } from '@toast-ui/vue-editor'

export default {
  components: {
    MarkdownEditor
  },
  data () {
    return {
      isVertical: true,
      isMarkdown: true,
      editorContent: '',
      editorHeight: '300px',
      editorHeightRules: [
        value => !!value || this.$t('hint.editorHeightRequired'),
        value => {
          return /^\d+px$/.test(value) || this.$t('hint.editorHeightInvalid')
        }
      ]
    }
  },
  computed: {
    editorPreviewStyle () {
      return this.isVertical ? 'vertical' : 'tab'
    },
    editorMode () {
      return this.isMarkdown ? 'markdown' : 'wysiwyg'
    }
  }
}
</script>
