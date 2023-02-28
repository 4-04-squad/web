<template>
  <div class="auth-layout">
    <div class="auth-layout__container">
      <div class="auth-layout__content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'AuthLayout',  
})
</script>
