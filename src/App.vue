<template>
  <application-header />
  <note-sorter />
  <note-selector />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'

// Component Imports
import ApplicationHeader from './components/ApplicationHeader.vue'
import NoteSorter from './components/NoteSorter.vue'
import NoteSelector from './components/NoteSelector.vue'

export default defineComponent({
  name: 'App',
  components: {
    ApplicationHeader,
    NoteSorter,
    NoteSelector
  },

  // Theme initalization
  // setup () {
  //   const initTheme = async () => {
  //     checkAndUpdateThemeSetting()
  //   }

  //   // Toggle darkmode on OS preference or explicit localstorage set
  //   function checkAndUpdateThemeSetting () {
  //     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  //       document.documentElement.classList.add('dark')
  //     } else {
  //       document.documentElement.classList.remove('dark')
  //     }
  //   }

  //   onBeforeMount(() => {
  //     initTheme()
  //   })
  // }
})
</script>
