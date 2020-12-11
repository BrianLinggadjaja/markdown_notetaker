<template>
  <aside class="note-sorter menu column is-primary is-2">
    <div class="note-sorter__header">
      <span>Simple Markdown Notetaker</span>
    </div>
    <p class="menu-label">Note Sorter</p>
    <ul class="menu-list">
      <li>
        <a :class="[{ ['active']: (currentNoteSort === 'notes')  }, 'note-sorter__category mb-1']">
          <font-awesome-icon icon="file-alt" />
          <span class="note-sorter__name">All Notes</span>
        </a>
      </li>
      <li>
        <a :class="[{ ['active']: (currentNoteSort === 'bookmarked')  }, 'note-sorter__category']">
          <font-awesome-icon icon="bookmark" />
          <span class="note-sorter__name">Bookmarked</span>
        </a>
      </li>
      <hr>
      <li>
        <a :class="[{ ['active']: (currentNoteSort === 'notebooks')  }, 'note-sorter__category mb-1']">
          <font-awesome-icon icon="book" />
          <span class="note-sorter__name">Notebooks</span>
        </a>
      </li>
      <li>
        <a :class="[{ ['active']: (currentNoteSort === 'tags')  }, 'note-sorter__category']">
          <font-awesome-icon icon="tags" />
          <span class="note-sorter__name">Tags</span>
        </a>
      </li>
    </ul>
  </aside>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentNoteSort: 'getCurrentNoteSort'
    })
  },

  mounted () {
    console.log(this.currentNoteSort)
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
.note-sorter__header {
  font-family: $font-family-header;
  font-weight: bold;
  font-size: 1rem;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.note-sorter {
  background-color: $color-primary;
  color: $color-primary-invert;
  font-size: medium;

  @media screen and (min-width: $tablet) {
    max-width: 18rem;
    min-width: 16rem;
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
