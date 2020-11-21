<template>
  <main class="column is-10 hero is-fullheight-with-navbar is-primary">
    <div class="editor columns">
      <section class="column is-3 hero-body">
        <note-selector />
      </section>

      <section class="column is-9 hero-body">
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
