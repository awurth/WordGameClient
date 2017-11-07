<template>
  <div class="register">
    <div class="ui container">
      <h1 class="ui header">Register</h1>
      <form class="ui form">
        <div class="field">
          <label for="username">Username</label>
          <input v-model="username" type="text" id="username">
        </div>
        <div class="field">
          <label for="email">Email</label>
          <input v-model="email" type="text" id="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input v-model="password" type="password" id="password">
        </div>
        <div class="field">
          <label for="confirm-password">Confirm password</label>
          <input v-model="confirmPassword" type="password" id="confirm-password">
        </div>
        <input @click.prevent="register()" type="submit" class="ui teal circular button" value="Register">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register () {
    }
  }
}
</script>
