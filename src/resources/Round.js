import Resource from '.'

let Round = Resource('rounds{/id}', {}, {
  ofGame: {
    method: 'GET',
    url: 'games/{id}/rounds'
  }
})

export default Round
