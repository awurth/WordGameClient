import Resource from '.'

let Game = Resource('games{/id}', {}, {
  ofUser: {
    method: 'GET',
    url: 'users/{id}/games'
  }
})

export default Game
