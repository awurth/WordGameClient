<template>
  <div class="play-game">
    <div class="ui container">
      <h1 class="ui center aligned dividing header">{{ game.name }}</h1>
      <form class="ui form">
        <table v-if="rounds.length" class="ui very compact center aligned teal striped celled table">
          <thead>
            <tr>
              <th>Letter</th>
              <th v-for="subject in game.subjects">{{ subject.name }}</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="round in rounds">
              <td>{{ round.letter }}</td>
              <td v-for="subject in game.subjects">
                <input type="text" :placeholder="subject.name" class="center aligned">
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
      <div class="ui hidden divider"></div>
      <form v-if="creator" class="ui form">
        <div v-field-error="errors.round.letter" class="inline field">
          <label for="round-letter">Letter</label>
          <input v-model="round.letter" type="text" placeholder="Letter" id="round-letter">
          <label-error :errors="errors.round.letter" direction="left"></label-error>
        </div>
        <button @click.prevent="createRound()" class="teal ui circular labeled icon button"><i class="add icon"></i> New round</button>
      </form>
    </div>
  </div>
</template>

<script>
import Security from '@/security'
import Game from '@/resources/Game'
import Round from '@/resources/Round'
import FormErrors from '@/util/FormErrors'

export default {
  name: 'PlayGame',
  data () {
    return {
      creator: false,
      game: {},
      rounds: [],
      round: {},
      errors: {
        round: {
          letter: []
        }
      }
    }
  },
  methods: {
    loadGame () {
      return Game.get({ id: this.$route.params.id }).then(response => {
        this.game = response.body
        this.loadRounds()
      })
    },
    loadRounds () {
      Round.ofGame({ id: this.game.id }).then(response => {
        this.rounds = response.body
      })
    },
    createRound () {
      let data = {
        game_round: {
          letter: this.round.letter,
          game: this.game.id
        }
      }

      Round.save(data).then(() => {
        this.loadRounds()
      }, response => {
        this.errors.round = FormErrors.resolve(response.body)
      })
    }
  },
  mounted () {
    this.loadGame().then(() => {
      this.creator = Security.user.id === this.game.creator.id
    })
  }
}
</script>
