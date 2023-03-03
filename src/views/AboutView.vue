<template>
  <MainLayout>
    <div id="page-about" class="main-page-content">
      <h1>About</h1>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from "@/components/layout/layout/MainLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  components: {
    MainLayout,
  },
});
</script>
