<template>
  <aside class="note-selector menu column is-primary is-3">
    <div class="note-selector__search">
      <b-field>
        <b-input placeholder="Search..."
          type="search"
          icon-pack="fa"
          icon="search">
        </b-input>
      </b-field>
    </div>
    <p class="menu-label">Note Selector</p>
    <ul class="menu-list">
      <li>Test</li>
    </ul>
  </aside>
</template>

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
}
</style>
