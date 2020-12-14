<template>
  <main class="column">
    <div class="editor-page columns">
      <note-selector />
      <section class="editor-wrapper column">
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
main {
  flex: 100;
}

.editor-page {
  @media screen and (min-width: $tablet) {
    height: 100vh;
  }
}

.editor-wrapper {
  box-shadow: -1px 0 3px $color-shadow-light;
  flex: 100;
  padding: 0;
}
</style>
