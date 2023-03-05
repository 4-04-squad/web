<template>
  <MainLayout>
    <div class="users-layout main-page-content">
      <div class="users-layout__container">
        <div class="users-layout__content">
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
  name: "UsersLayout",
  components: {
    MainLayout,
  },
});
</script>
