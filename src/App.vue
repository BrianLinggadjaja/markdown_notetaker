<template>
  <div id="app" class="columns">
    <note-sorter />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NoteSorter from './components/NoteSorter'

export default {
  components: {
    NoteSorter
  },

  computed: {
    ...mapGetters({
      hasInitalVisit: 'hasInitalVisit'
    })
  },

  mounted () {
    if (this.hasInitalVisit) {
      this.$store.dispatch('addInitalNote')
    }
  },

  methods: {
    ...mapActions([
      'addInitalNote'
    ])
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
