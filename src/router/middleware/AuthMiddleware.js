import Security from '@/security'

export default function (to, from, next) {
  if (!Security.check()) {
    next({ name: 'Login' })
  } else {
    next()
  }
}
