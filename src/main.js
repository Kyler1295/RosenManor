// Vue Imports
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// Dependency Imports
import 'aos/dist/aos.css'

// Font Awesome Imports
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faTimes,
  faArrowLeft,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faBars, faTimes, faArrowLeft, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')