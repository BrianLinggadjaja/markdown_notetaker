<template>
  <aside class="note-selector menu column is-primary is-4">
    <div class="note-selector__search">
      <b-field>
        <!-- https://buefy.org/documentation/autocomplete -->
        <b-input placeholder="Search..."
          type="search"
          icon-pack="fa"
          icon="search">
        </b-input>
      </b-field>
    </div>
    <p class="menu-label">Note Selector</p>
    <div class="note-selector__create-note">
      <button @click="isModalOpen = true" class="button is-primary">Create Note</button>
    </div>

    <b-modal
      v-model="isModalOpen"
      has-modal-card
      trap-focus
      :destroy-on-hide="true"
      aria-role="dialog"
      aria-modal>
      <div>
        <note-creator />
      </div>
    </b-modal>

    <note-card />
  </aside>
</template>

<script>
import NoteCard from './NoteCard'
import NoteCreator from './NoteCreator'

export default {
  components: {
    NoteCard,
    NoteCreator
  },

  data () {
    return {
      isModalOpen: false
    }
  }
}
</script>

<style lang="scss">
.note-selector .input[type="search"] {
  border-radius: 2rem;
}
</style>

<style lang="scss" scoped>
.note-selector {
  background-color: $color-secondary;
  color: $color-secondary-invert;
  box-shadow: 2px 0 3px inset $color-shadow-dark;

  @media screen and (min-width: $tablet) {
    max-width: 20rem;
    min-width: 16rem;
  }

  &__search {
    padding: 0.6rem 0;
  }

  &__create-note {
    text-align: center;
    font-size: 0.6rem;
    padding: 0 0 0.8rem 0;

    & button {
      font-size: 0.9rem;
      width: 100%;
    }
  }
}
</style>
