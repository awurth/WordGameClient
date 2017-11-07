import Auth from '@/security'

export default function (to, from, next) {
  if (Auth.check()) {
    next({ name: 'Home' })
  } else {
    next()
  }
}
