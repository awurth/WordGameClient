import jQuery from 'jquery'
import 'semantic-ui/dist/semantic'

import Vue from 'vue'
import App from './App'
import router from './router'

import './resources'
import './directives'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
