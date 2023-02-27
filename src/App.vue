<template>
  <Header />
  
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/header/Header.vue'
</script>