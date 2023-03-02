<template>
  <MainLayout>
    <div class="auth-layout main-page-content">
      <div class="auth-layout__container">
        <div class="auth-layout__content">
          <router-view />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from "@/components/layout/layout/MainLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthLayout",
  components: {
    MainLayout,
  },
});
</script>
