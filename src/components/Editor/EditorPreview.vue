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
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      allNotesRefsArray: 'getAllNoteRefs',
      selectedNote: 'getSelectedNote'
    })
  },

  data () {
    return {
      markdownEditor: null
    }
  },

  mounted () {
    this.initEditor()
  },

  methods: {
    ...mapActions([
      'saveSelectedNote'
    ]),

    initEditor: function () {
      this.markdownEditor = new SimpleMDE({
        element: document.getElementById('editorPreview'),
        autosave: true,
        status: false,
        hideIcons: ['guide'],
        renderingConfig: {
          codeSyntaxHighlighting: false
        }
      })

      // Load selected note into editor when initalized
      // const storedNote = JSON.parse(this.selectedNote.markdown)
      // // this.markdownEditor.value(storedNote)
      console.log(JSON.parse(this.selectedNote.markdown))

      // Attach instance to "this"
      const instance = this
      this.markdownEditor.codemirror.on('change', function () {
        const editorText = instance.markdownEditor.value()
        instance.saveNoteInState(JSON.stringify(editorText))
        instance.copyEditorMarkdown(editorText)
      })
    },

    // Save text to clipboard
    copyEditorMarkdown: function (editorText) {
      navigator.clipboard.writeText(editorText)
    },

    saveNoteInState: function (editorText) {
      console.log(editorText)
      this.$store.dispatch('saveSelectedNote', editorText)
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
