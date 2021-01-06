// Module Imports
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import VueRouter from 'vue-router'
import GlobalStore from './store'
import routes from './routes'
import Buefy from 'buefy'
import App from './App.vue'

// Font Awesome
import { dom, library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faExclamationCircle, faTimesCircle, faBook, faBookmark, faFileAlt, faTags, faSearch, faHashtag, faHeading, faBold, faItalic, faMinus, faQuoteLeft, faListUl, faListOl, faEye, faColumns, faArrowsAlt, faLink, faImage, faEdit } from '@fortawesome/free-solid-svg-icons'

dom.watch()
library.add(faExclamationCircle, faTimesCircle, faBook, faBookmark, faFileAlt, faTags, faSearch, faHashtag, faHeading, faBold, faItalic, faMinus, faQuoteLeft, faListUl, faListOl, faEye, faColumns, faArrowsAlt, faLink, faImage, faEdit)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// Mounted Modules
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Buefy)

// Vuex Initalization
const store = new Vuex.Store(GlobalStore)

// Vuex Persistent State Initalization
const debug = process.env.NODE_ENV !== 'production'
GlobalStore.strict = debug

const persistedStore = new VuexPersistence({
  storage: window.localStorage
})

GlobalStore.plugins = [persistedStore.plugin] // Attach Plugins to Vuex store

// Vue Router
const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title // Updates Vue Router Title on "Page" Change
  })
})

// Vue Instance
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// Turn off production tip on dev
Vue.config.productionTip = false
