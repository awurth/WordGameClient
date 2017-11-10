import AuthMiddleware from './middleware/AuthMiddleware'

import Game from '@/components/game/Game'
import CreateGame from '@/components/game/CreateGame'
import PlayGame from '@/components/game/PlayGame'

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
    },
    {
      path: ':id',
      name: 'PlayGame',
      component: PlayGame
    }
  ]
}
