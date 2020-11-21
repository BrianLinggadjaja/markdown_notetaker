<template>
  <div id="app">
    <div class="columns">
      <file-storage />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import FileStorage from './components/FileStorage'

export default {
  components: {
    FileStorage
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 0;
  }
</style>
