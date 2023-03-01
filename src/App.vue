<template>
  <div class="grid main-layout">
    <Header />
    <RouterView />
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/layout/header/Header.vue'
import Sidebar from '@/components/layout/sidebar/Sidebar.vue'
</script>

<style lang="scss" scoped>
.main-layout {
  height: 100vh;
  display: grid;
  grid-template-columns: 0.5fr 3fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  grid-template-areas:
    "header main sidebar";
}
</style>