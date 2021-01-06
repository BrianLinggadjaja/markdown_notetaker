const exampleMarkdown = `# Example Note
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
  // General
  isUsersInitalVisit: true,
  selectedNoteSort: 'notes',
  selectedNoteRef: null,
  // Global
  allSavedNotes: {},
  allNoteRefs: [],
  allBookmarkedNoteRefs: []
  // Sort
})

// Actions
const actions = {
  addInitalNote ({ commit }) {
    commit('addInitalNote')
    commit('updateAllNotesRefObject')
    commit('updateSelectedNoteRef', 'Example Note')
    commit('markInitalVisit')
  },

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
  addInitalNote (state) {
    // Create inital note
    state.allSavedNotes['Example Note'] = {
      title: 'Example Note',
      markdown: JSON.stringify(exampleMarkdown),
      isBookmarked: false,
      attachedNotebookRef: null,
      tags: []
    }
  },

  markInitalVisit (state) {
    state.isUsersInitalVisit = false
  },

  updateNoteSort (state, selectedSortName) {
    state.selectedNoteSort = selectedSortName
  },

  updateSelectedNoteRef (state, selectedNoteRef) {
    // Check if note exists
    const selectedNote = state.allSavedNotes[selectedNoteRef]
    if (selectedNote) {
      state.selectedNoteRef = selectedNoteRef
    } else {
      state.selectedNoteRef = null
    }
  },

  updateCurrentSelectedNote (state, updatedNote) {
    state.allSavedNotes[state.selectedNoteRef].markdown = updatedNote
  },

  removeCurrentNoteRefFromObj (state) {
    delete state.allSavedNotes[state.selectedNoteRef]
    state.selectedNoteRef = state.allNoteRefs[0]
  },

  resetSelectedNoteRef (state) {
    state.selectedNoteRef = null
  },

  addNoteObject (state, noteObject) {
    const defaultMarkdownText = JSON.stringify('# New Note')

    state.allSavedNotes[noteObject.title] = noteObject
    state.allSavedNotes[noteObject.title].markdown = defaultMarkdownText
  },

  updateNoteObject (state, newNoteObject) {
    // Populate new note with newNoteObject & Transfer the markdown
    state.allSavedNotes[newNoteObject.title] = newNoteObject
    state.allSavedNotes[newNoteObject.title].markdown = state.allSavedNotes[state.selectedNoteRef].markdown
    delete state.allSavedNotes[state.selectedNoteRef]
  },

  updateAllNotesRefObject (state) {
    state.allNoteRefs = Object.keys(state.allSavedNotes)
  },

  addNoteBookmark (state, selectedNoteRef) {
    const arraySet = new Set(...state.allBookmarkedNoteRefs)
    const hasNotBookmarked = !arraySet.has(selectedNoteRef)

    if (hasNotBookmarked) {
      state.allBookmarkedNoteRefs.unshift(selectedNoteRef)
    }
  }
}

// Getters
const getters = {
  hasInitalVisit: state => {
    return state.isUsersInitalVisit
  },

  getCurrentNoteSort: state => {
    return state.selectedNoteSort
  },

  getAllNotesObj: state => {
    return state.allSavedNotes
  },

  getAllNoteRefs: state => {
    return state.allNoteRefs
  },

  getAllBookmarkedRefs: state => {
    return state.allBookmarkedNoteRefs
  },

  getCurrentNoteRef: state => {
    return state.selectedNoteRef
  },

  getSelectedNote: state => {
    const parsedNote = state.allSavedNotes[state.selectedNoteRef]
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
