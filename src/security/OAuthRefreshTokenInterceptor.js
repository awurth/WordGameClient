import Vue from 'vue'
import Security from '.'

export default function (request, next) {
  next(response => {
    if (response.status === 401 && response.body.error === 'invalid_grant') {
      return Security.refresh().then(() => {
        return Vue.http(request).then(response => {
          return response
        })
      })
    }
  })
}
