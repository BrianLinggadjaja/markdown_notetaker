<template>
  <main class="column">
    <div class="editor-page columns">
      <note-selector />
      <section v-if="selectedNote" class="editor-wrapper column">
        <editor-preview />
      </section>
      <section v-else class="editor-page__info">
        <font-awesome-icon class="editor-page__info-icon mb-3" icon="edit" />
        <h1 class="editor-page__info-header">No note selected</h1>
        <p class="mb-6">Create or select a pre-existing note to start editing!</p>
      </section>
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'
import NoteSelector from './../components/Editor/NoteSelector'
import EditorPreview from './../components/Editor/EditorPreview'

export default {
  components: {
    NoteSelector,
    EditorPreview
  },

  computed: {
    ...mapGetters({
      selectedNote: 'getCurrentNoteRef'
    })
  },

  updated () {
    console.log(true)
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

  &__info {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;

    &-icon {
      font-size: 8rem;
    }

    &-header {
      font-family: $font-family-header;
      font-weight: bold;
      font-size: 2.25rem;
    }
  }
}

.editor-wrapper {
  box-shadow: -1px 0 3px $color-shadow-light;
  flex: 100;
  padding: 0;
}
</style>
