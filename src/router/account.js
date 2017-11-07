import AuthMiddleware from './middleware/AuthMiddleware'

import Account from '@/components/account/Account'
import Home from '@/components/Home'

export default {
  path: '/account',
  component: Account,
  beforeEnter: AuthMiddleware,
  redirect: '/account/games',
  children: [
    {
      path: 'games',
      name: 'AccountGames',
      component: Home
    }
  ]
}
