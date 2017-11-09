import Vue from 'vue'
import _ from 'lodash'

let valueHasErrors = value => {
  return (_.isArray(value) && value.length) || !_.isEmpty(value)
}

let hasErrors = (value, arg) => {
  if (arg && _.isPlainObject(value)) {
    if (_.has(value, arg) && value[arg]) {
      return valueHasErrors(value[arg])
    }

    return false
  }

  return valueHasErrors(value)
}

Vue.directive('field-error', {
  update: (el, binding) => {
    if (hasErrors(binding.value, binding.arg)) {
      window.$(el).addClass('error')
    } else {
      window.$(el).removeClass('error')
    }
  }
})
