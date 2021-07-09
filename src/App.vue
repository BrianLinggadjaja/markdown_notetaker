<template>
  <div class="flex flex-col h-full">
    <application-header />
    <div class="flex flex-row md:flex-nowrap flex-grow text-gray-300">
      <note-selector class="flex-grow-0 w-1/4 lg:w-56" />
      <editor-preview class="flex-grow" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'

// Component Imports
import ApplicationHeader from './components/ApplicationHeader.vue'
import NoteSelector from './components/NoteSelector.vue'
import EditorPreview from './components/EditorPreview.vue'

export default defineComponent({
  name: 'App',
  components: {
    ApplicationHeader,
    NoteSelector,
    EditorPreview
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
