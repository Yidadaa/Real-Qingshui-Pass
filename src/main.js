import Vue from 'vue'
import VueRouter from 'vue-router'

// import vue material dependencies
// import { MdButton, MdProgress, MdToolbar, MdList, MdIcon, MdDialogPrompt } from 'vue-material/dist/components'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// import components
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import QRCodePage from './components/QRCodePage.vue'
import PassRulePage from './components/PassRulePage.vue'

Vue.config.productionTip = false

// config vue material ui framework
// Vue.use(MdButton)
// Vue.use(MdProgress)
// Vue.use(MdToolbar)
// Vue.use(MdList)
// Vue.use(MdIcon)
// Vue.use(MdDialogPrompt)
Vue.use(VueMaterial)

// config vue router
Vue.use(VueRouter)

// config page router
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
      path: '/', component: LoginPage
    }, {
      path: '/home', component: HomePage
    }, {
      path: '/qr', component: QRCodePage
    }, {
      path: '/rule', component: PassRulePage
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
