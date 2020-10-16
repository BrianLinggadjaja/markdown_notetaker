import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import App from './App.vue'

// Libraries
import Buefy from 'buefy'

// Global CSS
import '@/scss/_base.scss'

// Vue Configuration
Vue.use(VueRouter)
Vue.use(Buefy)
Vue.config.productionTip = false

// Vue Router Instance
const router = new VueRouter({
  mode: 'history',
  routes
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title
  })
})

// Vue Instance
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
