<template>
  <div>
    <b-navbar>
        <template slot="start">
            <b-navbar-item>
                <b-button size="is-small">New</b-button>
                <b-button size="is-small">Tag</b-button>
                <b-button size="is-small">Delete</b-button>
            </b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
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
