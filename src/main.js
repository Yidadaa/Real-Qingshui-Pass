import Vue from 'vue'
import VueRouter from 'vue-router'

// import vue material dependencies
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// import components
import App from './App.vue'
import HomePage from './components/HomePage.vue'
import LoginPage from './components/LoginPage.vue'
import QRCodePage from './components/QRCodePage.vue'
import PassRulePage from './components/PassRulePage.vue'
import WechatPage from './components/WechatPage.vue'
import ScanPage from './components/ScanPage.vue'
import SettingPage from './components/SettingPage.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

// config vue material ui framework
Vue.use(VueMaterial)

// config vue router
Vue.use(VueRouter)

// config page router
const router = new VueRouter({
  mode: 'hash',
  base: process.env.NODE_ENV === 'production' ? 'Real-Qingshui-Pass' : __dirname,
  routes: [{
      path: '/login', component: LoginPage
    }, {
      path: '/home', component: HomePage
    }, {
      path: '/qr', component: QRCodePage
    }, {
      path: '/rule', component: PassRulePage
    }, {
      path: '/', component: WechatPage
    }, {
      path: '/scan', component: ScanPage
    }, {
      path: '/setting', component: SettingPage
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
