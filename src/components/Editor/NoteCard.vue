<template>
  <a @click="updateSelectedNote()" :class="[ (currentNoteRef === title) ? 'selected': null, 'note box']">
    <h1 v-if="title" class="note-title">
      <font-awesome-icon icon="hashtag" />
      {{ title }}
    </h1>
    <h2 v-if="attachedNotebook" class="note-book">School Lectures</h2>
    <b-taglist v-if="(tags.length > 0)" class="note__tag-list">
      <b-tag type="is-red">First</b-tag>
      <b-tag type="is-maroon">Second</b-tag>
      <b-tag type="is-pink">Third</b-tag>
      <b-tag type="is-purple">Fourth</b-tag>
      <b-tag type="is-yellow">Fifth</b-tag>
      <b-tag type="is-orange">Sixth</b-tag>
      <b-tag type="is-lime">Seventh</b-tag>
      <b-tag type="is-green">Eigth</b-tag>
      <b-tag type="is-cyan">Ninth</b-tag>
      <b-tag type="is-blue">Tenth</b-tag>
    </b-taglist>
  </a>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    noteRef: String
  },

  computed: {
    ...mapGetters({
      allNotes: 'getAllNotesObj',
      currentNoteRef: 'getCurrentNoteRef'
    })
  },

  data () {
    return {
      isCurrentSelectedNote: false,
      title: null,
      attachedNotebook: null,
      tags: []
    }
  },

  mounted () {
    const currentNoteObj = this.allNotes[this.noteRef]
    this.title = currentNoteObj.title
    this.attachedNotebook = currentNoteObj.attachedNotebook
    this.tags = currentNoteObj.tags

    if (currentNoteObj.title === this.currentNoteRef) {
      console.log('yes')
      this.isCurrentSelectedNote = true
    }
  },

  updated () {
    console.log(true)
  },

  methods: {
    ...mapActions([
      'selectNoteSort'
    ]),

    updateSelectedNote: function () {
      this.$store.dispatch('changeSelectedNote', this.noteRef)
    }
  }
}
</script>

<style lang="scss">
.note {
  margin-bottom: 0.5rem !important;
  padding: 0.75rem 1rem !important;

  &.selected {
    background-color: $color-primary-lighter !important;

    & > h1 {
      color: $color-primary-invert;
    }
  }

  &-title {
    font-family: $font-family-header;
    font-weight: bold;
    font-size: 1rem;
    overflow: hidden;
  }

  &__tag-list {
    margin-top: 1rem;

    & .tag {
      border-radius: 2rem;
    }
  }
}
</style>
