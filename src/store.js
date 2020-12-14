/*
  * How Vuex Works
  * States are set with inital/default values
  * Each state is modified within the application by calling an "action"
  * An "action" is usually an interaction between the user, such as "addToCart"
  * "actions" are used to run any asyncronus operation and "commits" a "mutation" when done
  * "mutations" handle the actual state changes and are purely syncronus code
  * Once the "state" values change when a mutation is ran, you will be able to recieve any updates by calling a "getter"
  *
  * In total, data is flowing in one direction from...
  * Button Press (Calls "Action") -> "Action" runs any asyncronus code (API calls usually); if not "commit" a "mutation" -> "Mutations" modify the "State" -> App can recieve updates via "Getters"
  * /

/*
  * Default State
  * Set default values for each value stored
  */
const state = () => ({
  selectedNoteSort: 'notes',
  selectedNoteRef: 'Test',
  savedNotesObj: {},
  bookmarkedNotesRefsArray: []
})

// Actions
const actions = {
  selectNoteSort ({ commit }, selectedSortName) {
    commit('updateNoteSort', selectedSortName)
  },

  saveSelectedNote ({ commit }, updatedNote) {
    commit('updateCurrentSelectedNote', updatedNote)
  },

  createNote ({ commit }, noteObject) {
    commit('addNoteObject', noteObject)
  }
}

// Mutations
const mutations = {
  updateNoteSort (state, selectedSortName) {
    state.selectedNoteSort = selectedSortName
  },

  updateCurrentSelectedNote (state, updatedNote) {
    state.savedNotesObj[state.selectedNoteRef].markdown = updatedNote
  },

  addNoteObject (state, noteObject) {
    const defaultMarkdownText = JSON.stringify('# New Note')

    state.savedNotesObj[noteObject.title] = noteObject
    state.savedNotesObj[noteObject.title].markdown = defaultMarkdownText
  }
}

// Getters
const getters = {
  getCurrentNoteSort: state => {
    return state.selectedNoteSort
  },
  getAllNoteRefs: state => {
    return Object.keys(state.savedNotesObj)
  },
  getSelectedNote: state => {
    console.log('getter', state, state.savedNotesObj[state.selectedNoteRef])
    const parsedNote = state.savedNotesObj[state.selectedNoteRef]
    return parsedNote
  }
}

// Module Export
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
