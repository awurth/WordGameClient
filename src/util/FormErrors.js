import _ from 'lodash'

export default {
  resolve (data) {
    if (!_.has(data, 'errors') || !_.has(data.errors, 'children')) {
      return null
    }

    let errors = {}
    _.mapKeys(data.errors.children, (value, key) => {
      if (_.has(value, 'errors')) {
        errors[key] = value.errors
      } else if (_.has(value, 'children')) {
        errors[key] = this.resolveValue(value, key)
      }
    })

    return errors
  },
  resolveValue (value) {
    if (_.isArray(value)) {
      let errors = []
      _.each(value, v => {
        errors.push(this.resolveValue(v))
      })

      return errors
    }

    if (_.isPlainObject(value)) {
      if (_.has(value, 'errors')) {
        return value.errors
      } else if (_.has(value, 'children')) {
        let errors = {}
        _.mapKeys(value.children, (v, k) => {
          errors[k] = this.resolveValue(v)
        })

        return errors
      }
    }

    return null
  }
}
