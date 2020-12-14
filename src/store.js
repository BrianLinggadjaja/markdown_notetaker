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
const exampleNote = `# Example Note
This is an example note...

## Text Modification
I am **Bold**
I am *Italic*

### Block Level
> I am a Block

I am an Un-ordered List
* Test 1
* Test 2
* Test 3

I am an Ordered List
1. Test 1
2. Test 2
3. Test 3`

const state = () => ({
  selectedNoteSort: 'notes',
  allSelectedNoteRefs: [],
  selectedNoteRef: 'Example Note',
  savedNotesObj: {
    'Example Note': {
      title: 'Example Note',
      markdown: JSON.stringify(exampleNote),
      isBookmarked: false,
      attachedNotebook: null,
      tags: []
    }
  },
  bookmarkedNotesRefsArray: []
})

// Actions
const actions = {
  selectNoteSort ({ commit }, selectedSortName) {
    commit('updateNoteSort', selectedSortName)
  },

  changeSelectedNote ({ commit }, selectedNoteRef) {
    commit('updateSelectedNoteRef', selectedNoteRef)
  },

  saveSelectedNote ({ commit }, updatedNote) {
    commit('updateCurrentSelectedNote', updatedNote)
  },

  deleteSelectedNote ({ commit }) {
    commit('removeCurrentNoteRefFromObj')
  },

  createNote ({ commit }, noteObject) {
    commit('addNoteObject', noteObject)
  },

  updateNote ({ commit }, newNoteObject) {
    commit('updateNoteObject', newNoteObject)
  },

  updateAllNotesRef ({ commit }) {
    commit('updateAllNotesRefObject')
  },

  bookmarkNote ({ commit }, selectedNoteRef) {
    commit('addNoteBookmark', selectedNoteRef)
  }
}

// Mutations
const mutations = {
  updateNoteSort (state, selectedSortName) {
    state.selectedNoteSort = selectedSortName
  },

  updateSelectedNoteRef (state, selectedNoteRef) {
    state.selectedNoteRef = selectedNoteRef
  },

  updateCurrentSelectedNote (state, updatedNote) {
    state.savedNotesObj[state.selectedNoteRef].markdown = updatedNote
  },

  removeCurrentNoteRefFromObj (state) {
    delete state.savedNotesObj[state.selectedNoteRef]
    state.selectedNoteRef = state.allSelectedNoteRefs[0]
  },

  addNoteObject (state, noteObject) {
    const defaultMarkdownText = JSON.stringify('# New Note')

    state.savedNotesObj[noteObject.title] = noteObject
    state.savedNotesObj[noteObject.title].markdown = defaultMarkdownText
  },

  updateNoteObject (state, newNoteObject) {
    // Populate new note with newNoteObject & Transfer the markdown
    state.savedNotesObj[newNoteObject.title] = newNoteObject
    state.savedNotesObj[newNoteObject.title].markdown = state.savedNotesObj[state.selectedNoteRef].markdown
    delete state.savedNotesObj[state.selectedNoteRef]
  },

  updateAllNotesRefObject (state) {
    state.allSelectedNoteRefs = Object.keys(state.savedNotesObj)
  },

  addNoteBookmark (state, selectedNoteRef) {
    const arraySet = new Set(...state.bookmarkedNotesRefsArray)
    const hasNotBookmarked = !arraySet.has(selectedNoteRef)

    if (hasNotBookmarked) {
      state.bookmarkedNotesRefsArray.unshift(selectedNoteRef)
    }
  }
}

// Getters
const getters = {
  getCurrentNoteSort: state => {
    return state.selectedNoteSort
  },

  getAllNotesObj: state => {
    return state.savedNotesObj
  },

  getAllNoteRefs: state => {
    return state.allSelectedNoteRefs
  },

  getAllBookmarkedRefs: state => {
    return state.bookmarkedNotesRefsArray
  },

  getCurrentNoteRef: state => {
    return state.selectedNoteRef
  },

  getSelectedNote: state => {
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
