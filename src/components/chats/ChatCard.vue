<template>
  <div class="chat-card">
    <div class="chat-card__user">
      <UserCard
        :user="user"
        :preview="formattedMessage"
        :info="formattedDate"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { MessageInterface } from "@/interfaces/message.interface";
import type { UserInterface } from "@/interfaces/user.interface";
import moment from "moment";

export default defineComponent({
  name: "ChatCard",
  props: {
    user: {
      type: Object as () => UserInterface,
      required: true,
    },
    lastMessage: {
      type: Object as () => MessageInterface,
      required: true,
    },
  },
  computed: {
    formattedDate(): string {
      return moment(this.lastMessage.createdAt).format("DD/MM/YYYY HH:mm:ss");
    },
    formattedMessage(): string {
      return this.lastMessage.body.length > 20
        ? this.lastMessage.body.substring(0, 20) + "..."
        : this.lastMessage.body;
    },
  },
  // TODO: Fetch DIRECT conversation from API
});
</script>
