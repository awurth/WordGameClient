<template>
  <nav class="ui borderless top fixed menu">
    <router-link :to="{ name: 'Home' }" class="header item">
      <img src="../assets/logo.png" alt="Logo"> Find The Words
    </router-link>
    <div class="right menu">
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
  export default {
    name: 'Topbar'
  }
</script>
