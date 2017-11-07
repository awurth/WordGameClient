import Auth from '@/security'

export default function (to, from, next) {
  if (!Auth.check()) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
