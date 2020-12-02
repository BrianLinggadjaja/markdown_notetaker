<template>
  <div>
    <span>Editor/Preview Panel</span>
    <textarea id="testEditor"></textarea>
  </div>
</template>

<script>
import SimpleMDE from 'simplemde'
import '@/scss/libraries/_simplemde.scss'

export default {
  mounted () {
    this.initEditor()
  },

  methods: {
    initEditor: function () {
      const test = new SimpleMDE({
        element: document.getElementById('testEditor'),
        renderingConfig: {
          codeSyntaxHighlighting: true
        }
      })
      console.log(test)
    }
  }
}
</script>
