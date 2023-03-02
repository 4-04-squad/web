<template>
  <div class="channels-layout main-page-content">
    <div class="channels-layout__container">
      <div class="channels-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChannelsLayout",
});
</script>
