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
      <RouterLink :to="{ name: 'users' }" class="link">
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
      const token = import.meta.env.VUE_APP_FORTY_TWO_CLIENT_ID;
      const callbackUrl = "http://localhost:3001/auth/login/callback";
      const redirectUrl = `https://api.intra.42.fr/oauth/authorize?client_id=${token}&redirect_uri=${callbackUrl}&response_type=code`;
      const popup = window.open(redirectUrl, "_blank", "height=600,width=600");

      // if the popup response is 302, it means the user is already logged in
      const interval = setInterval(() => {
        if (popup && popup.location.href === "http://localhost:3003/login") {
          popup.close();
          clearInterval(interval);
        }
      }, 100);

      // Check if the token is valid on the server
      try {
        const response = await axios
          .get("http://localhost:3001/users/login", {
            withCredentials: true,
          })
          .then((res) => {
            // set the user in the store
            this.userStore.setUser(res.data.user as UserInterface);
            if (this.userStore.user) {
              console.log("User is logged in" + this.userStore.user.pseudo);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error: any) {
        console.log(error);
      }
    },

    async logout() {
      if (this.userStore.user) {
        try {
          const response = await axios
            .get("http://localhost:3001/auth/signout/" + this.userStore.user.id)
            .then((res) => {
              this.userStore.clearUser();
              if (!this.userStore.user) {
                console.log("User is logged out");
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
