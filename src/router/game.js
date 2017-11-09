import AuthMiddleware from './middleware/AuthMiddleware'

import Game from '@/components/game/Game'
import CreateGame from '@/components/game/CreateGame'

export default {
  path: '/game',
  component: Game,
  beforeEnter: AuthMiddleware,
  redirect: '/game/new',
  children: [
    {
      path: 'new',
      name: 'CreateGame',
      component: CreateGame
    }
  ]
}
