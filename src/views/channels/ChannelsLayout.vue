<template>
  <MainLayout>
    <div class="channels-layout main-page-content">
      <div class="channels-layout__container">
        <div class="channels-layout__content">
          <router-view />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from "@/components/layout/layout/MainLayout.vue";
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";

export default defineComponent({
  name: "ChannelsLayout",
  components: {
    MainLayout,
  },
  beforeCreate() {
    const userStore = useUserStore();
    if (!userStore.user) {
      router.push({ path: "/login" });
    }
  },
});
</script>
