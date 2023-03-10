<template>
  <div id="page-profile" class="page-user">
    <div class="head">
      <UserCard :user="user" :full="'full'" :size="'large'"/>
      <div class="shortcut" v-if="user?.id === userStore.user?.id">
        <RouterLink :to="{name: 'user-edit', params: { id: user?.id}}" class="edit-btn">
          <button class="btn btn--icon">
            <EditIcon />
            <span>Modifier mon profil</span>
          </button>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { UserInterface } from "@/interfaces/user.interface";
import { useUserStore } from "@/stores/user";
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
import UserCard from "@/components/user/UserCard.vue";
import {
  EditIcon,
} from "@/components/icons";

export default defineComponent({
  name: "ProfileView",
  components: {
    UserCard,
    EditIcon,
  },
  setup() {
    const userStore = useUserStore();
    const route = useRoute();
    const user = ref<UserInterface | undefined>(undefined);

    // Watch for changes to route params and fetch user data again
    watch(
      () => route.params,
      async () => {
        if (route.params.pseudo) {
          // Get user by pseudo from API if we are on another user profile
          const response = await axios.get(`${import.meta.env.VITE_APP_API_URL}/users/${route.params.pseudo}`, {
            withCredentials: true,
          })
          .then((response) => {
            user.value = response.data.user;
            console.log(response)
          })
          .catch((error) => {
            console.log(error);
          });
        } else {
          // Get current user from store
          user.value = userStore.user;
        }
      },
      { immediate: true } // Call the function immediately when the component is created
    );

    return {
      userStore,
      user,
    };
  },
});
</script>