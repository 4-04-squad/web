<template>
    <header class="main-header">
      <div class="grid">
        <nav class="main-nav grid">
          <RouterLink to="home">Home</RouterLink>
          <RouterLink to="about">About</RouterLink>
          <UserCard :user="userStore.user" :info="''" :preview="''" :full="'half-card'" :size="'medium'" v-if="userStore.user"/>
          <RouterLink to="login" v-else>Login</RouterLink>
        </nav>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import UserCard from '@/components/user/UserCard.vue'
  import { useUserStore } from '@/stores/user'
  const userStore = useUserStore()
  </script>