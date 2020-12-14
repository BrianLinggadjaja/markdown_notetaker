<template>
  <aside class="note-selector menu column is-primary is-4">
    <div class="note-selector__search">
      <b-field>
        <!-- https://buefy.org/documentation/autocomplete -->
        <b-autocomplete
          v-model="name"
          placeholder="Search..."
          @select="option => selectedSearch = option"
          :data="findMatchingNote"
          icon-pack="fa"
          icon="search"
          clearable
          rounded>
        </b-autocomplete>
      </b-field>
    </div>
    <p class="menu-label">Note Selector</p>
    <div class="note-selector__create-note">
      <button @click="openNoteCreationModal()" class="button is-primary">Create Note</button>
    </div>

    <div class="note-wrapper" v-if="(currentNoteSort ==='notes')">
      <note-card :key="note" v-for="note in allNoteRefs" :noteRef="note" />
    </div>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'
import NoteCard from './NoteCard'
import NoteCreator from './NoteCreator'

export default {
  components: {
    NoteCard
  },

  computed: {
    ...mapGetters({
      currentNoteSort: 'getCurrentNoteSort',
      allNoteRefs: 'getAllNoteRefs'
    }),

    findMatchingNote () {
      return this.allNoteRefs.filter((option) => {
        return option
          .toString()
          .toLowerCase()
          .indexOf(this.name.toLowerCase()) >= 0
      })
    }
  },

  data () {
    return {
      selectedSearch: null,
      name: ''
    }
  },

  methods: {
    openNoteCreationModal: function () {
      this.$buefy.modal.open({
        parent: this,
        component: NoteCreator,
        hasModalCard: true,
        trapFocus: true,
        ariaModal: true
      })
    }
  },

  updated () {
    // Check if selected search note exists before updating
    if (this.selectedSearch) {
      this.$store.dispatch('changeSelectedNote', this.selectedSearch)
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
  display: flex !important;
  flex-flow: column;
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

.note-wrapper {
  flex: 100;
  overflow: auto;
}
</style>
