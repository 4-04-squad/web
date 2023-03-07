<template>
  <div class="main-layout">
    <Header />
    <slot></slot>
    <Sidebar>
      <MembersList
        title="Membres"
      />
    </Sidebar>
  </div>
</template>

<script lang="ts">
import Header from "@/components/layout/header/Header.vue";
import Sidebar from "@/components/layout/sidebar/Sidebar.vue";
import MembersList from "@/components/user/MembersList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ChannelLayout",
  components: {
    Header,
    Sidebar,
    MembersList,
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
