import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

// Import VueX "Page" modules
import GlobalState from './store/global'
import EditorState from './store/editor'
import SettingsState from './store/settings'

// Libraries
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faBookmark, faFileAlt, faTags, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Global CSS
import '@/scss/_base.scss'

// Vue use Font-Awesome
library.add(faBook, faBookmark, faFileAlt, faTags, faSearch)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue Configuration
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.config.productionTip = false

// Vue Router Instance
const router = new VueRouter({
  mode: 'history',
  routes
})

// Updates Vue Router Title on "Page" Change
router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

// Check if development mode and provide debug boolean
const debug = process.env.NODE_ENV !== 'production'

// Vuex Global Store (State Management) Initalization
const store = new Vuex.Store({
  modules: {
    global: GlobalState,
    editor: EditorState,
    settings: SettingsState
  },
  strict: debug
})

// Vue Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
