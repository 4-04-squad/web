<template>
  <div class="main-layout">
    <Header />
    <slot></slot>
    <Sidebar />
  </div>
</template>

<script lang="ts">
import Header from "@/components/layout/header/Header.vue";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Header,
    Sidebar,
  },
});
</script>
