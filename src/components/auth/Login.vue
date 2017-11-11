<template>
  <div class="login">
    <div class="ui container">
      <h1 class="ui header">Login</h1>
      <form class="ui form">
        <div class="field">
          <label for="username">Username</label>
          <input v-model="credentials.username" type="text" id="username">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input v-model="credentials.password" type="password" id="password">
        </div>
        <input @click.prevent="login()" type="submit" class="ui teal circular button" value="Login">
      </form>
      <div class="ui error message" v-if="error">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import Security from '@/security'

export default {
  name: 'Login',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      error: ''
    }
  },
  methods: {
    login () {
      Security.login(this, this.credentials, { name: 'Home' })
    }
  }
}
</script>
