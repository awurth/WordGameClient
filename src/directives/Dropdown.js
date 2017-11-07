import Vue from 'vue'

Vue.directive('dropdown', {
  inserted: function (el) {
    window.$(el).dropdown()
  }
})
