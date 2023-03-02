<template>
  <div class="users-layout main-page-content">
    <div class="users-layout__container">
      <div class="users-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "UsersLayout",
});
</script>
