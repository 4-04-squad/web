<template>
  <main class="main-page-content">
    <div class="users-layout">
      <div class="users-layout__container">
        <div class="users-layout__content">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UsersLayout',
})
</script>
