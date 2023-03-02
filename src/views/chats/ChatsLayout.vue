<template>
  <div class="chats-layout main-page-content">
    <div class="chats-layout__container">
      <div class="chats-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChatsLayout",
});
</script>
