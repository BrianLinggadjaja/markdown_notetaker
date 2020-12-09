import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

// Import VueX "Page" modules
import GlobalState from './store/global'
import FileExplorerState from './store/file-explorer'
import EditorState from './store/editor'
import SettingsState from './store/settings'

// Libraries
import Buefy from 'buefy'

// Global CSS
import '@/scss/_base.scss'

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
    GlobalState,
    FileExplorerState,
    EditorState,
    SettingsState
  },
  strict: debug
})

// Vue Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
