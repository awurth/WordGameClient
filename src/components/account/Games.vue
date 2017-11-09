<template>
  <div class="account-games">
    <div class="ui container">
      <h1 class="ui dividing center aligned header">My games</h1>
      <table v-if="games.length" class="ui celled table">
        <thead>
          <tr class="center aligned">
            <th>#</th>
            <th>Name</th>
            <th>Subjects</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody class="center aligned">
          <tr v-for="(game, index) in games">
            <td>{{ index + 1 }}</td>
            <td>{{ game.name }}</td>
            <td><a v-for="subject in game.subjects" class="teal ui label">{{ subject.name }}</a></td>
            <td>{{ game.created_at | calendar }}</td>
            <td class="right aligned">
              <button @click="deleteGame(game.id)" class="mini red ui circular labeled icon button"><i class="trash icon"></i> Delete</button>
            </td>
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
  methods: {
    loadGames () {
      Game.ofUser({ id: Auth.user.id }).then(response => {
        this.games = response.body
      })
    },
    deleteGame (id) {
      Game.delete({ id: id }).then(() => {
        this.loadGames()
      })
    }
  },
  mounted () {
    this.loadGames()
  }
}
</script>
