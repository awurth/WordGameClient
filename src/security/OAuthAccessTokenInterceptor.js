import Security from '.'

export default function (request, next) {
  let token = Security.getAccessToken()
  if (token) {
    request.headers.set('Authorization', 'Bearer ' + token)
  }

  next()
}
