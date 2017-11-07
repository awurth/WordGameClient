import Vue from 'vue'
import Auth from '.'

export default function (request, next) {
  next(response => {
    if (response.status === 401 && response.body.error === 'invalid_grant') {
      return Auth.refresh().then(() => {
        return Vue.http(request).then(response => {
          return response
        })
      })
    }
  })
}
