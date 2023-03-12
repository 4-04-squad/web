<template>
  <section class="chat">
    <div class="chat__messages">
      <!-- All messages -->
      <Message
        v-for="message in messages"
        :key="message.id"
        :user="message.user"
        :message="message"
      />
    </div>
  </section>
</template>

<script lang="ts">
import type { MessageInterface } from "@/interfaces/message.interface";
import { defineComponent } from "vue";
import Message from "./Message.vue";

export default defineComponent({
  name: "Chat",
  components: {
    Message,
  },
  props: {
    messages: {
      type: Array as () => MessageInterface[],
      required: true,
    },
  },
  // TODO: Fetch messages from API
});
</script>
