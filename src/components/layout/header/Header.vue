<template>
    <header class="main-header">
      <div class="wrapper">
        <nav class="main-nav">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <UserCard :user="[]" :info="''" :preview="''" :full="''" :size="'medium'"/>
      </div>
    </header>
  </template>
  
  <script setup lang="ts">
  import { RouterLink } from 'vue-router'
  import UserCard from '@/components/user/UserCard.vue'
  </script>