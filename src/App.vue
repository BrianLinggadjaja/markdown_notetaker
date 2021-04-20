<template>
  <div id="app" class="columns">
    <note-sorter />
    <router-view></router-view>
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
#app {
  height: 100vh;
  margin-bottom: 0;
}

.columns {
  margin: 0;
}
</style>
