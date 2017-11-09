import jQuery from 'jquery'
import 'semantic-ui/dist/semantic'

import Vue from 'vue'
import App from '@/App'
import Router from '@/router'
import Auth from '@/security'

import '@/resources'
import '@/directives'
import '@/filters'
import '@/components/util'

window.$ = window.jQuery = jQuery

Vue.config.productionTip = false

let initApp = () => {
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    router: Router,
    template: '<App/>',
    components: { App }
  })
}

Auth.init().then(initApp, initApp)
