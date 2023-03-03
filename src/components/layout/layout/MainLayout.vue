<template>
  <div class="main-layout">
    <Header />
    <slot></slot>
    <Sidebar>
      <section class="head">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </section>
    </Sidebar>
  </div>
</template>

<script lang="ts">
import Header from "@/components/layout/header/Header.vue";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    Header,
    Sidebar,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
  },
});
</script>
