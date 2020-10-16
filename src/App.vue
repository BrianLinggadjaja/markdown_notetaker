<template>
  <div id="app">
    <handle-bar />

    <div class="columns">
      <file-storage />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HandleBar from './components/HandleBar'
import FileStorage from './components/FileStorage'

export default {
  components: {
    HandleBar,
    FileStorage
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 0;
  }
</style>
