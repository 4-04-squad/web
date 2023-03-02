<template>
  <MainLayout>
    <div id="page-home" class="main-page-content">
      <h1>Home</h1>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from "@/components/layout/layout/MainLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainLayout,
  },
});
</script>
