<template>
  <div id="app">
    <div class="columns">
      <note-sorter />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NoteSorter from './components/NoteSorter'

export default {
  components: {
    NoteSorter
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 0;
  }
</style>
