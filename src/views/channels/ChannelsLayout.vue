<template>
  <ChannelLayout>
    <div class="channels-layout main-page-content">
      <div class="channels-layout__container">
        <div class="channels-layout__content">
          <router-view />
        </div>
      </div>
    </div>
  </ChannelLayout>
</template>

<script lang="ts">
import ChannelLayout from "@/components/layout/layout/ChannelLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChannelsLayout",
  components: {
    ChannelLayout,
  },
});
</script>
