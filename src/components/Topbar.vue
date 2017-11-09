<template>
  <nav class="ui borderless top fixed menu">
    <router-link :to="{ name: 'Home' }" class="header item">
      <img src="../assets/logo.png" alt="Logo"> Find The Words
    </router-link>
    <div class="right menu" v-if="user.authenticated">
      <div class="item">
        <router-link :to="{ name: 'CreateGame' }" class="ui circular button">Play</router-link>
      </div>
      <div class="item">
        <router-link :to="{ name: 'AccountGames' }" class="ui circular button">Games</router-link>
      </div>
      <div class="item">
        <button @click="logout()" class="ui teal circular button">Logout</button>
      </div>
    </div>
    <div class="right menu" v-if="!user.authenticated">
      <div class="item">
        <router-link :to="{ name: 'Login' }" class="ui circular button">Login</router-link>
      </div>
      <div class="item">
        <router-link :to="{ name: 'Register' }" class="ui teal circular button">Register</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Auth from '@/security'
import EventHub from '@/util/EventHub'

export default {
  name: 'Topbar',
  data () {
    return {
      user: Auth.user
    }
  },
  methods: {
    logout () {
      Auth.logout()
      this.$router.push({ name: 'Home' })
    }
  },
  mounted () {
    EventHub.$on('auth', () => {
      this.user = Auth.user
    })
  }
}
</script>
