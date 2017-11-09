<template>
  <div class="account-games">
    <div class="ui container">
      <h1 class="ui dividing center aligned header">My games</h1>
      <table v-if="games.length" class="ui table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Subjects</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in games">
            <td>{{ game.id }}</td>
            <td>{{ game.name }}</td>
            <td>{{ game.subjects }}</td>
            <td>{{ game.created_at }}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Auth from '@/security'
import Game from '@/resources/Game'

export default {
  name: 'AccountGames',
  data () {
    return {
      games: []
    }
  },
  mounted () {
    Auth.getUser().then(() => {
      Game.ofUser({ id: Auth.user.id }).then(response => {
        this.games = response.body
      })
    })
  }
}
</script>
