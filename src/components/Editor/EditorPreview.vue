<template>
  <div class="editor">
    <section class="editor-title">
      <h1>
        <font-awesome-icon icon="hashtag" />
        {{ selectedNote.title }}
      </h1>
    </section>

    <!-- <section>
      <b-button @click="deleteNote" size="is-small" class="button is-danger">Delete</b-button>
      <b-button @click="deleteNote" size="is-small" class="button is-danger">Update Name</b-button>
    </section> -->

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
        spellChecker: false,
        autosave: false,
        status: false,
        hideIcons: ['guide'],
        autoDownloadFontAwesome: true,
        renderingConfig: {
          codeSyntaxHighlighting: false
        },
        toolbar: [
          {
            name: 'heading',
            action: SimpleMDE.toggleHeadingSmaller,
            className: 'fa fa-header',
            title: 'Heading Level'
          },
          {
            name: 'bold',
            action: SimpleMDE.toggleBold,
            className: 'fa fa-bold',
            title: 'Bold'
          },
          {
            name: 'italic',
            action: SimpleMDE.toggleItalic,
            className: 'fa fa-italic',
            title: 'Italic'
          },
          '|',
          {
            name: 'horizontal-rule',
            action: SimpleMDE.drawHorizontalRule,
            className: 'fa fa-minus',
            title: 'Horizontal Line'
          },
          {
            name: 'quote',
            action: SimpleMDE.toggleBlockquote,
            className: 'fa fa-quote-left',
            title: 'Quote'
          },
          {
            name: 'unordered-list',
            action: SimpleMDE.toggleUnorderedList,
            className: 'fa fa-list-ul',
            title: 'Un-ordered List'
          },
          {
            name: 'ordered-list',
            action: SimpleMDE.toggleUnorderedList,
            className: 'fa fa-list-ol',
            title: 'Ordered List'
          },
          '|',
          {
            name: 'preview',
            action: SimpleMDE.togglePreview,
            className: 'fa fa-eye no-disable',
            title: 'Toggle Preview'
          },
          {
            name: 'side-by-side',
            action: SimpleMDE.toggleSideBySide,
            className: 'fa fa-columns no-disable no-mobile',
            title: 'Toggle Side by Side (Full-Screen)'
          },
          {
            name: 'fullscreen',
            action: SimpleMDE.toggleFullScreen,
            className: 'fa fa-arrows-alt no-disable no-mobile',
            title: 'Toggle Full-Screen'
          },
          '|',
          {
            name: 'link',
            action: SimpleMDE.drawLink,
            className: 'fa fa-link',
            title: 'Insert Link'
          },
          {
            name: 'image',
            action: SimpleMDE.drawImage,
            className: 'fa fa-image',
            title: 'Insert Image'
          },
          '|',
          {
            name: 'custom',
            action: function customFunction (editor) {
              console.log(true)
            },
            className: 'fa fa-star',
            title: 'Custom Button'
          },
          {
            name: 'custom',
            action: function customFunction (editor) {
              console.log(true)
            },
            className: 'fa fa-star',
            title: 'Custom Button'
          }
        ]
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
    },

    deleteNote: function () {
      this.$store.dispatch('deleteSelectedNote')
      this.$store.dispatch('updateAllNotesRef')
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
