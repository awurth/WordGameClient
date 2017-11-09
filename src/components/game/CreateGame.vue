<template>
  <div class="create-game">
    <div class="ui container">
      <h1 class="ui dividing header">Create a new game</h1>
      <form class="ui form error">
        <div v-field-error="errors.name" class="field">
          <label for="game-name">Name</label>
          <input v-model="game.name" type="text" id="game-name" placeholder="Enter a name for your game">
          <label-error :errors="errors.name"></label-error>
        </div>
        <h4 class="ui header">Subjects</h4>
        <div v-for="(subject, index) in game.subjects" v-field-error:name="errors.subjects[index]" class="field">
          <div class="ui fluid action input">
            <input v-model="game.subjects[index].name" type="text" placeholder="Name (Ex: Animal, Anatomy, First name, ...)">
            <button @click.prevent="deleteSubject(index)" class="red ui icon button"><i class="trash icon"></i></button>
          </div>
          <label-error :errors="errors.subjects[index] ? errors.subjects[index].name : ''"></label-error>
        </div>
          <button @click.prevent="addSubject()" class="small green ui circular labeled icon button"><i class="add icon"></i> Add</button>
        <div class="ui hidden divider"></div>
        <input @click.prevent="submit()" type="submit" class="fluid ui teal circular button" value="Create">
      </form>
    </div>
  </div>
</template>

<script>
import Game from '@/resources/Game'
import FormErrors from '@/util/FormErrors'

export default {
  name: 'CreateGame',
  data () {
    return {
      game: {
        name: '',
        subjects: [
          {
            name: ''
          }
        ]
      },
      errors: {
        name: [],
        subjects: []
      }
    }
  },
  methods: {
    addSubject () {
      this.game.subjects.push({ name: null })
    },
    deleteSubject (index) {
      if (this.game.subjects.length > 1) {
        this.game.subjects.splice(index, 1)
      }
    },
    submit () {
      Game.save({ game_game: this.game }).then(() => {
        this.$router.push({ name: 'AccountGames' })
      }, response => {
        this.errors = FormErrors.resolve(response.body)
      })
    }
  }
}
</script>
