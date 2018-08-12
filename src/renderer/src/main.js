import '@babel/polyfill'
import './plugins/vuetify'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import routes from './router'

Vue.use(Vuetify, {
 iconfont: 'fa'
})

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
