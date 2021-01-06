// 'Example Note Object': {
//   title: 'Example Note',
//   markdown: JSON.stringify(exampleNote),
//   isBookmarked: false,
//   attachedNotebookRef: null,
//   tags: []
// }

// const exampleNote = `# Example Note
// This is an example note...

// ## Text Modification
// I am **Bold**
// I am *Italic*

// ### Block Level
// > I am a Block

// I am an Un-ordered List
// * Test 1
// * Test 2
// * Test 3

// I am an Ordered List
// 1. Test 1
// 2. Test 2
// 3. Test 3`

// 'Example Note': {
//   title: 'Example Note',
//   markdown: JSON.stringify(exampleNote),
//   isBookmarked: false,
//   attachedNotebook: null,
//   tags: []
// }

const state = () => ({
  selectedNoteSort: 'notes',
  allSelectedNoteRefs: [],
  selectedNoteRef: null,
  savedNotesObj: {},
  bookmarkedNotesRefsArray: []
})

// Actions
const actions = {
  selectNoteSort ({ commit }, selectedSortName) {
    commit('updateNoteSort', selectedSortName)
    commit('resetSelectedNoteRef')
  },

  changeSelectedNote ({ commit }, selectedNoteRef) {
    commit('updateSelectedNoteRef', selectedNoteRef)
  },

  saveSelectedNote ({ commit }, updatedNote) {
    commit('updateCurrentSelectedNote', updatedNote)
  },

  deleteSelectedNote ({ commit }) {
    commit('removeCurrentNoteRefFromObj')
    commit('resetSelectedNoteRef')
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
    // Check if note exists
    const selectedNote = state.savedNotesObj[selectedNoteRef]
    if (selectedNote) {
      state.selectedNoteRef = selectedNoteRef
    } else {
      state.selectedNoteRef = null
    }
  },

  updateCurrentSelectedNote (state, updatedNote) {
    state.savedNotesObj[state.selectedNoteRef].markdown = updatedNote
  },

  removeCurrentNoteRefFromObj (state) {
    delete state.savedNotesObj[state.selectedNoteRef]
    state.selectedNoteRef = state.allSelectedNoteRefs[0]
  },

  resetSelectedNoteRef (state) {
    state.selectedNoteRef = null
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
