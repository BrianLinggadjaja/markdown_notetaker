<template>
  <aside class="note-selector column is-primary is-3">
    <p>Note selector</p>
  </aside>
</template>

<style lang="scss" scoped>
.note-selector {
  background-color: $color-secondary;
  color: $color-secondary-invert;
  box-shadow: 2px 0 3px inset $color-shadow-dark;

  @media screen and (min-width: $tablet) {
    max-width: 20rem;
    min-width: 16rem;
  }
}
</style>
