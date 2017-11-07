import Auth from '.'

export default function (request, next) {
  let token = Auth.getAccessToken()
  if (token) {
    request.headers.set('Authorization', 'Bearer ' + token)
  }

  next()
}
