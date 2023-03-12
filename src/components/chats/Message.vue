<template>
  <article class="message">
    <div class="message__user">
      <UserCard :user="user" :info="formattedDate" />
    </div>
    <div class="message__body">
      <p>{{ message.body }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import moment from "moment";
import type { UserInterface } from "@/interfaces/user.interface";
import type { MessageInterface } from "@/interfaces/message.interface";
import UserCard from "@/components/user/UserCard.vue";

export default defineComponent({
  name: "Message",
  components: {
    UserCard,
  },
  props: {
    user: {
      type: Object as () => UserInterface,
      required: true,
    },
    message: {
      type: Object as () => MessageInterface,
      required: true,
    },
  },
  computed: {
    formattedDate(): string {
      return moment(this.message.createdAt).format("DD/MM/YYYY HH:mm:ss");
    },
  },
});
</script>
