<template>
  <div class="modal-card" style="width: auto">
    <section class="modal-card-head">
      <p class="modal-card-title">Note Creation</p>
    </section>

    <section class="modal-card-body">
      <b-field label="Note Title (Required)">
        <b-field>
          <b-input placeholder="New note"
            v-model="title"
            icon-pack="fa"
            icon="hashtag"
            maxlength="36"
            required>
          </b-input>
        </b-field>
      </b-field>

      <b-field label="Assigned Notebook">
        <b-field>
          <b-input placeholder="Notebook"
            v-model="attachedNotebook"
            icon-pack="fa"
            icon="book"
            maxlength="36">
          </b-input>
        </b-field>
      </b-field>

      <b-field label="Attached Tags">
        <b-taginput
          v-model="attachedTags"
          type="is-info"
          icon-pack="fa"
          icon="tags"
          maxtags="6"
          maxlength="8">
        </b-taginput>
      </b-field>
    </section>

    <section class="modal-card-foot">
      <button class="button" type="button" @click="$emit('close')">Close</button>
      <button class="button is-accent" @click="createNewNote()">Crete Note</button>
    </section>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      title: null,
      attachedNotebook: null,
      attachedTags: []
    }
  },

  methods: {
    ...mapActions([
      'createNote',
      'changeSelectedNote'
    ]),

    createNewNote: function () {
      this.validateNewNote()
      this.$emit('close')
    },

    validateNewNote: function () {
      const cleanNoteObj = {
        title: this.cleanValue(this.title),
        attachedNotebook: this.cleanValue(this.attachedNotebook),
        tags: this.attachedTags
      }

      this.$store.dispatch('createNote', cleanNoteObj)
      this.$store.dispatch('changeSelectedNote', this.title)
    },

    cleanValue: function (value) {
      if (value) {
        // Trim leading & trailing spaces
        value.trim()

        // Remove duplicate spaces
        value.replace(/\s+/g, ' ')
      }

      return value
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-card {
  @media screen and (min-width: $tablet) {
    min-width: 20rem;
  }

  &-foot {
    justify-content: flex-end;
  }
}
</style>
