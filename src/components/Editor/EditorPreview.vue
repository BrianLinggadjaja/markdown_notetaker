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
        autoDownloadFontAwesome: false,
        renderingConfig: {
          codeSyntaxHighlighting: false
        },
        toolbar: [
          {
            name: 'heading',
            action: SimpleMDE.toggleHeadingSmaller,
            className: 'icon-header',
            title: 'Heading Level'
          },
          {
            name: 'bold',
            action: SimpleMDE.toggleBold,
            className: 'icon-bold',
            title: 'Bold'
          },
          {
            name: 'italic',
            action: SimpleMDE.toggleItalic,
            className: 'icon-italic',
            title: 'Italic'
          },
          '|',
          {
            name: 'horizontal-rule',
            action: SimpleMDE.drawHorizontalRule,
            className: 'icon-minus',
            title: 'Horizontal Line'
          },
          {
            name: 'quote',
            action: SimpleMDE.toggleBlockquote,
            className: 'icon-quote-left',
            title: 'Quote'
          },
          {
            name: 'unordered-list',
            action: SimpleMDE.toggleUnorderedList,
            className: 'icon-list-ul',
            title: 'Un-ordered List'
          },
          {
            name: 'ordered-list',
            action: SimpleMDE.toggleOrderedList,
            className: 'icon-list-ol',
            title: 'Ordered List'
          },
          '|',
          {
            name: 'preview',
            action: SimpleMDE.togglePreview,
            className: 'icon-eye no-disable',
            title: 'Toggle Preview'
          },
          {
            name: 'side-by-side',
            action: SimpleMDE.toggleSideBySide,
            className: 'icon-columns no-disable no-mobile',
            title: 'Toggle Side by Side (Full-Screen)'
          },
          {
            name: 'fullscreen',
            action: SimpleMDE.toggleFullScreen,
            className: 'icon-arrows-alt no-disable no-mobile',
            title: 'Toggle Full-Screen'
          },
          '|',
          {
            name: 'link',
            action: SimpleMDE.drawLink,
            className: 'icon-chain',
            title: 'Insert Link'
          },
          {
            name: 'image',
            action: SimpleMDE.drawImage,
            className: 'icon-image',
            title: 'Insert Image'
          },
          '|',
          {
            name: 'custom',
            action: () => {
              console.log(true)
            },
            className: 'icon-edit',
            title: 'Edit Name'
          },
          {
            name: 'custom',
            action: () => this.deleteNote(),
            className: 'icon-trash',
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
