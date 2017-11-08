import Vue from 'vue'

Vue.directive('field-error', {
  update: (el, binding) => {
    if (Array.isArray(binding.value)) {
      if (binding.value.length) {
        window.$(el).addClass('error')
      }
    } else if (binding.value) {
      window.$(el).addClass('error')
    }
  }
})
