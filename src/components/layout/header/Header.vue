<template>
  <header class="main-header">
    <nav class="main-nav main-nav--login">
      <UserCard :user="userStore.user" v-if="userStore.user" :full="'half'" />
      <button :to="{ name: 'login' }" v-else @click="login" class="login">
        <LoginIcon />
      </button>
    </nav>
    <nav class="main-nav main-nav--link">
      <RouterLink :to="{ name: 'home' }" class="link">
        <HomeIcon />
      </RouterLink>
      <RouterLink :to="{ name: 'games' }" class="link">
        <GameIcon />
      </RouterLink>
      <RouterLink :to="{ name: 'channels' }" class="link">
        <GlobeIcon />
      </RouterLink>
      <RouterLink :to="{ name: 'chats' }" class="link">
        <MessageIcon />
      </RouterLink>
      <RouterLink :to="{ name: 'users-all' }" class="link">
        <UsersIcon />
      </RouterLink>
    </nav>
    <nav class="main-nav main-nav--settings">
      <RouterLink :to="{ name: 'about' }" class="link">
        <InfoIcon />
      </RouterLink>
      <button v-if="userStore.user" class="link" @click="logout">
        <LogoutIcon />
      </button>
      <ThemeSwitcher />
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
import UserCard from "@/components/user/UserCard.vue";
import ThemeSwitcher from "@/components/themes/ThemeSwitcher.vue";
import {
  HomeIcon,
  InfoIcon,
  LogoutIcon,
  LoginIcon,
  MessageIcon,
  GlobeIcon,
  GameIcon,
  UsersIcon,
} from "@/components/icons";
import { useUserStore } from "@/stores/user";
import axios from "axios";
import router from "@/router";
import type { UserInterface } from "@/interfaces/user.interface";

export default defineComponent({
  name: "Header",
  components: {
    RouterLink,
    UserCard,
    ThemeSwitcher,
    HomeIcon,
    InfoIcon,
    LogoutIcon,
    LoginIcon,
    MessageIcon,
    GlobeIcon,
    GameIcon,
    UsersIcon,
  },
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  methods: {
    async login() {
      const loginUrl = `${import.meta.env.VITE_APP_API_URL}/users/login`;
      const token = import.meta.env.VITE_APP_FORTY_TWO_CLIENT_ID;
      const callbackUrl = `${import.meta.env.VITE_APP_API_URL}/auth/login/callback`;
      const redirectUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${token}&redirect_uri=${callbackUrl}&response_type=code`;
      const popup = window.open(redirectUrl, "_blank", "height=600,width=600");

      popup?.addEventListener("load", () => {
        if (popup?.location.href === loginUrl) {
          popup.close();
        }
      });

      // wait for the user to complete the login process
      const interval = setInterval(async () => {
        try {
          const response = await axios.get(loginUrl, {
            withCredentials: true,
          });
          // check if the user is logged in
          if (response.status === 200) {
            // clear the interval and close the popup
            clearInterval(interval);
            popup?.close();
            // set the user in the store
            this.userStore.setUser(response.data.user as UserInterface);
            if (this.userStore.user) {
              console.log("User is logged in " + this.userStore.user.pseudo);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }, 100);
    },

    async logout() {
      if (this.userStore.user) {
        try {
          const response = await axios
            .get(`${import.meta.env.VITE_APP_API_URL}/auth/signout/${this.userStore.user.id}`, {
              withCredentials: true,
            })
            .then((res) => {
              this.userStore.clearUser();
              console.log(res)
              if (!this.userStore.user) {
                console.log("User is logged out");
                router.push({ path: '/login' })
              }
            })
            .catch((err) => {
              console.log(err);
            });
        } catch (error: any) {
          console.log(error);
        }
      }
    },
  },
});
</script>
