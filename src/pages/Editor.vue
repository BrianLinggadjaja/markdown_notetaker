<template>
  <main class="column is-10 hero is-fullheight-with-navbar is-primary">
    <div class="editor columns">
      <section class="column is-3 hero-body">
        <file-selector />
      </section>

      <section class="column is-9 hero-body">
        <editor-preview />
      </section>
    </div>
  </main>
</template>

<script>
import FileSelector from './../components/Editor/FileSelector'
import EditorPreview from './../components/Editor/EditorPreview'

export default {
  components: {
    FileSelector,
    EditorPreview
  }
}
</script>
