import App from './App'
import Vue from 'vue'
import router from "./router/router"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false
new Vue({
  el: '#app',
  components: { App },
  router: router,
  template: '<App/>'
})
