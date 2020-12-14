// Javascript Libraries
import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

// Import VueX Store
import GlobalStore from './store'

// Style Libraries
import Buefy from 'buefy'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook, faBookmark, faFileAlt, faTags, faSearch, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Global Style
import '@/scss/_base.scss'

// Font Awesome
library.add(faBook, faBookmark, faFileAlt, faTags, faSearch, faHashtag)
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
GlobalStore.strict = debug

const persistedStore = new VuexPersistence({
  storage: window.localStorage
})

// Attach Plugins to Vuex store
GlobalStore.plugins = [persistedStore.plugin]

// Vuex Global Store (State Management) Initalization
const store = new Vuex.Store(GlobalStore)

// Vue Instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
