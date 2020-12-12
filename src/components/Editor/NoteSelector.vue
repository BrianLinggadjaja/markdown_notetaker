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
      <button @click="createNewNote" class="button is-primary">Create Note</button>
    </div>

    <!-- Refactor into new component -->
    <div class="note box">
      <h1 class="note-title">Comp 484 - Lecture 1 (12/11/2020)</h1>
      <h2 class="note-book">School</h2>
      <b-taglist class="note__tag-list">
        <b-tag type="is-red">First</b-tag>
        <b-tag type="is-maroon">Second</b-tag>
        <b-tag type="is-pink">Third</b-tag>
        <b-tag type="is-purple">Fourth</b-tag>
        <b-tag type="is-yellow">Fifth</b-tag>
        <b-tag type="is-orange">Sixth</b-tag>
        <b-tag type="is-lime">Seventh</b-tag>
        <b-tag type="is-green">Eigth</b-tag>
        <b-tag type="is-cyan">Ninth</b-tag>
        <b-tag type="is-blue">Tenth</b-tag>
      </b-taglist>
    </div>
  </aside>
</template>

<script>
export default {
  methods: {
    // https://buefy.org/documentation/taginput
    createNewNote: function () {
      console.log('create a new note!')
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
.note {
  &-title {
    font-family: $font-family-header;
    font-weight: bold;
    font-size: 1rem;
  }

  &__tag-list {
    margin-top: 1rem;
  }
}
</style>
