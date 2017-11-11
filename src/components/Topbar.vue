<template>
  <nav class="ui borderless top fixed menu">
    <router-link :to="{ name: 'Home' }" class="header item">
      <img src="../assets/logo.png" alt="Logo"> Find The Words
    </router-link>
    <div v-if="user.authenticated" class="right menu">
      <div class="item">
        <router-link :to="{ name: 'CreateGame' }" class="teal ui circular button">New game</router-link>
      </div>
      <div class="ui dropdown item" v-dropdown>
        {{ user.username }}
        <i class="dropdown icon"></i>
        <div class="menu">
          <router-link :to="{ name: 'AccountGames' }" class="item"><i class="game icon"></i> My games</router-link>
          <a @click="logout()" class="item"><i class="power icon"></i> Logout</a>
        </div>
      </div>
    </div>
    <div v-if="!user.authenticated" class="right menu">
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
import Security from '@/security'
import EventHub from '@/util/EventHub'

export default {
  name: 'Topbar',
  data () {
    return {
      user: Security.user
    }
  },
  methods: {
    logout () {
      Security.logout()
      this.$router.push({ name: 'Home' })
    }
  },
  mounted () {
    EventHub.$on('auth', () => {
      this.user = Security.user
    })
  }
}
</script>
