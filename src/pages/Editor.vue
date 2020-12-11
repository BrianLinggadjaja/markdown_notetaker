<template>
  <main class="column is-10">
    <div class="editor-page columns">
      <note-selector />
      <section class="editor-wrapper column is-9">
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
.editor-page {
  height: 100vh;
}

.editor-wrapper {
  padding: 0;
  box-shadow: -1px 0 3px $color-shadow-light;
}
</style>
