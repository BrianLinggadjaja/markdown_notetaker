<template>
  <main class="column is-10">
    <div class="editor columns">
      <note-selector />

      <section class="column is-9">
        <editor-preview />
      </section>
    </div>
  </main>
</template>

<script>
import NoteSelector from './../components/Editor/NoteSelector'
import EditorPreview from './../components/Editor/EditorPreview'

export default {
  components: {
    NoteSelector,
    EditorPreview
  }
}
</script>

<style lang="scss" scoped>
.editor {
  height: 100vh;
}
</style>
