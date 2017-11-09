import Resource from '.'

let User = Resource('users{/id}', {}, {
  current: {
    method: 'GET',
    url: 'user'
  }
})

export default User
