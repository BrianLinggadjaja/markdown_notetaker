<template>
  <div class="editor">
    <b-navbar>
      <template slot="start">
        <b-navbar-item>
          <b-button size="is-small">New</b-button>
          <b-button size="is-small">Tag</b-button>
        </b-navbar-item>
        <b-navbar-item class="buttons is-right">
          <b-button size="is-small" class="button is-danger">Delete</b-button>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <div class="buttons"></div>
        </b-navbar-item>
      </template>
    </b-navbar>
    <textarea id="editorPreview"></textarea>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import '@/scss/libraries/_simplemde.scss'

export default {
  mounted () {
    this.initEditor()
  },

  methods: {
    initEditor: function () {
      const markdownEditor = new SimpleMDE({
        element: document.getElementById('editorPreview'),
        autosave: true,
        status: false,
        hideIcons: ['guide'],
        renderingConfig: {
          codeSyntaxHighlighting: false
        }
      })

      markdownEditor.codemirror.on('change', function () {
        console.log(markdownEditor.value())
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.editor {
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>
