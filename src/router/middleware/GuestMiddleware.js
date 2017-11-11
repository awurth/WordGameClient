import Security from '@/security'

export default function (to, from, next) {
  if (Security.check()) {
    next({ name: 'Home' })
  } else {
    next()
  }
}
