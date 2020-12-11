<template>
  <aside class="note-sorter menu column is-primary is-2">
    <p class="menu-label">Note Sorter</p>
    <ul class="menu-list">
      <li><a>All Notes</a></li>
      <li>
        <font-awesome-icon icon="book" />
        <a>Notebooks</a>
      </li>
      <li><a>Tags</a></li>
      <li><a>Categories</a></li>
      <li><a>Bookmarked</a></li>
      <li><a>Settings</a></li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.note-sorter {
  background-color: $color-primary;
  color: $color-primary-invert;
  font-size: medium;
}
</style>
