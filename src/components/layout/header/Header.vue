<template>
  <header class="main-header grid">
    <nav class="main-nav main-nav--login">
      <UserCard :user="userStore.user" v-if="userStore.user" :full="'half'" />
      <RouterLink :to="{ name: 'login' }" v-else>Login</RouterLink>
    </nav>
    <nav class="main-nav main-nav--link">
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'about' }">About</RouterLink>
    </nav>
    <nav class="main-nav main-nav--settings">

    </nav>
  </header>
</template>
  
<script setup lang="ts">
import { RouterLink } from 'vue-router'
import UserCard from '@/components/user/UserCard.vue'
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()
</script>

<style lang="scss" scoped>
.main-header {
  grid-area: header;
  grid-template-columns: 1fr;
  .main-nav {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--login {
      justify-content: flex-start;
    }

    &--link {
      justify-content: center;
    }

    &--settings {
      justify-content: flex-end;
    }
  }
}
</style>