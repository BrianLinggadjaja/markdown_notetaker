<template>
  <div class="editor">
    <div class="editor-title">
      <h1>
        <font-awesome-icon icon="hashtag" />
        {{ selectedNote.title }}
      </h1>
    </div>

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

  updated () {
    this.populateEditorFromState()
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

      this.populateEditorFromState()

      // Attach instance to "this"
      const instance = this
      this.markdownEditor.codemirror.on('change', function () {
        const editorText = instance.markdownEditor.value()

        instance.saveNoteInState(JSON.stringify(editorText))
        instance.copyEditorMarkdown(editorText)
      })
    },

    populateEditorFromState: function () {
      this.markdownEditor.value(JSON.parse(this.selectedNote.markdown))
    },

    // Save text to clipboard
    copyEditorMarkdown: function (editorText) {
      navigator.clipboard.writeText(editorText)
    },

    saveNoteInState: function (editorText) {
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

  &-title {
    background-color: $color-primary-lighter;
    color: $color-primary-invert;
    padding: 0.5rem 0.75rem;

    & > h1 {
      font-family: $font-family-header;
      font-weight: bold;
      font-size: 1.25rem;
    }
  }
}
</style>
