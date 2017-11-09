import AuthMiddleware from './middleware/AuthMiddleware'

import Account from '@/components/account/Account'
import Games from '@/components/account/Games'

export default {
  path: '/account',
  component: Account,
  beforeEnter: AuthMiddleware,
  redirect: '/account/games',
  children: [
    {
      path: 'games',
      name: 'AccountGames',
      component: Games
    }
  ]
}
