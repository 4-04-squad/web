<template>
  <GameLayout>
    <div class="games-layout main-page-content">
      <div class="games-layout__container">
        <div class="games-layout__content">
          <router-view />
        </div>
      </div>
    </div>
  </GameLayout>
</template>

<script lang="ts">
import GameLayout from "@/components/layout/layout/GameLayout.vue";
import { defineComponent } from "vue";
import { useUserStore } from "@/stores/user";
import router from "@/router";

export default defineComponent({
  name: "GamesLayout",
  components: {
    GameLayout,
  },
  beforeCreate() {
    const userStore = useUserStore();
    if (!userStore.user) {
      router.push({ path: "/login" });
    }
  },
});
</script>
