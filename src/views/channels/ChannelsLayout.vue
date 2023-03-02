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

export default defineComponent({
  name: "ChannelsLayout",
  components: {
    MainLayout,
  },
});
</script>
