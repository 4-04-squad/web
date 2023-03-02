<template>
  <div class="main-layout">
    <Header />
    <RouterView />
    <Sidebar />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "@/components/layout/header/Header.vue";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
</script>
