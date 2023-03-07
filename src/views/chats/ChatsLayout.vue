<template>
  <MainLayout>
    <div class="chats-layout main-page-content">
      <div class="chats-layout__container">
        <div class="chats-layout__content">
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
  name: "ChatsLayout",
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
