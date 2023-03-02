<template>
  <div class="games-layout main-page-content">
    <div class="games-layout__container">
      <div class="games-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GamesLayout",
});
</script>
