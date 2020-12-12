<template>
  <div class="note box">
    <h1 class="note-title">Comp 484 - Lecture 1 (12/11/2020)</h1>
    <h2 class="note-book">School Lectures</h2>
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
</template>

<style lang="scss">
.note {
  &-title {
    font-family: $font-family-header;
    font-weight: bold;
    font-size: 1rem;
    overflow: hidden;
  }

  &__tag-list {
    margin-top: 1rem;

    & .tag {
      border-radius: 2rem;
    }
  }
}
</style>
