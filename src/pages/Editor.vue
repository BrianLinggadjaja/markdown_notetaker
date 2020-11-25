<template>
  <main class="column is-10">
    <div class="editor columns">
      <section class="column is-3">
        <note-selector />
      </section>

      <section class="column is-9">
        <editor-preview />
      </section>

      <section class="column is-9">
        <editor-toolbar />
      </section>
    </div>
  </main>
</template>

<script>
import NoteSelector from './../components/Editor/NoteSelector'
import EditorPreview from './../components/Editor/EditorPreview'
import EditorToolbar from './../components/Editor/EditorToolbar'

export default {
  components: {
    NoteSelector,
    EditorPreview,
    EditorToolbar
  }
}
</script>

<style lang="scss" scoped>
.editor {
  height: 100vh;
}
</style>
