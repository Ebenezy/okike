import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
import { VueTyper } from 'vue-typer'
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faFacebookF, faTwitter, faInstagram, faBars)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
    VueTyper,
    'vue-typer': VueTyper,
  render: h => h(App)
}).$mount('#app')
