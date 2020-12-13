<template>
  <b-modal
    v-model="isModalOpen"
    @close="console.log('hello')"
    has-modal-card
    trap-focus
    :destroy-on-hide="true"
    aria-role="dialog"
    aria-modal>
    <div>
      Hello world
      <button class="button is-primary">Hello</button>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    isNoteCreatorOpen: Boolean
  },

  watch: {
    isModalOpen: this.isNoteCreatorOpen
  }
}
</script>
