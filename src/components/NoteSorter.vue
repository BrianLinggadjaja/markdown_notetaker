<template>
  <aside class="note-sorter menu column is-primary is-2">
    <div class="note-sorter-wrapper">
      <div class="note-sorter__header">
        <span>Simple Markdown Notetaker</span>
      </div>
      <p class="menu-label">Note Sorter</p>
      <ul class="menu-list">
        <li>
          <a @click="setNoteSort('notes')" :class="[{ ['active']: (currentNoteSort === 'notes')  }, 'note-sorter__category mb-1']">
            <font-awesome-icon icon="file-alt" />
            <span class="note-sorter__name">All Notes</span>
          </a>
        </li>
        <li>
          <a @click="setNoteSort('bookmarked')" :class="[{ ['active']: (currentNoteSort === 'bookmarked')  }, 'note-sorter__category']">
            <font-awesome-icon icon="bookmark" />
            <span class="note-sorter__name">Bookmarked</span>
          </a>
        </li>
        <hr>
        <li>
          <a @click="setNoteSort('notebooks')" :class="[{ ['active']: (currentNoteSort === 'notebooks')  }, 'note-sorter__category mb-1']">
            <font-awesome-icon icon="book" />
            <span class="note-sorter__name">Notebooks</span>
          </a>
        </li>
        <li>
          <a @click="setNoteSort('tags')" :class="[{ ['active']: (currentNoteSort === 'tags')  }, 'note-sorter__category']">
            <font-awesome-icon icon="tags" />
            <span class="note-sorter__name">Tags</span>
          </a>
        </li>
      </ul>
      <div class="buttons mb-4">
        <p>
          <b-switch
            class="ml-3 mt-5"
            v-model="lightMode"
            passive-type="is-dark"
            type="is-warning">
            {{ lightMode ? 'Light Mode' : 'Dark Mode' }}
          </b-switch>
        </p>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentNoteSort: 'getCurrentNoteSort'
    })
  },

  methods: {
    ...mapActions([
      'selectNoteSort'
    ]),

    setNoteSort (selectedSortName) {
      this.$store.dispatch('selectNoteSort', selectedSortName)
    }
  },

  data () {
    return {
      lightMode: true
    }
  }
}
</script>

<style lang="scss">
.menu {
  & a {
    font-family: $font-family-normal;
    font-weight: normal;
    font-size: 1rem;
  }
}

.menu-label {
  font-family: $font-family-header;
  font-size: 1rem;
}
</style>

<style lang="scss" scoped>
.menu-list {
  flex: 100;
}

.note-sorter__header {
  text-align: center;
  font-family: $font-family-header;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 0;
  margin-bottom: 0.25rem;

  @media screen and (min-width: $tablet) {
    text-align: left;
  }
}

.note-sorter {
  background-color: $color-primary;
  color: $color-primary-invert;
  font-size: medium;

  @media screen and (min-width: $tablet) {
    max-width: 18rem;
    min-width: 16rem;
  }

.note-sorter-wrapper{
  display: flex !important;
  flex-flow: column;
  height: 100%;
}

  & hr {
    background-color: $color-primary-lighter;
  }

  & a {
    color: $color-primary-invert;
  }

  &__category.active {
    background-color: $color-accent;
    color: $color-accent-invert;
  }

  &__name {
    margin-left: 0.75rem;
  }

  .menu-label {
    color: $color-primary-invert;
  }
}
</style>
