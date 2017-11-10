import Vue from 'vue'

let dropdown = el => {
  window.$(el).dropdown()
}

Vue.directive('dropdown', {
  inserted: dropdown,
  update: dropdown
})
