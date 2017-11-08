import Vue from 'vue'

Vue.directive('dropdown', {
  inserted: el => {
    window.$(el).dropdown()
  }
})
