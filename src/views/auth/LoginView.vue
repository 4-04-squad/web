<template>
  <div id="page-login">
    <button class="login-btn" @click="logout" v-if="userStore.user">
      se deconnecter
    </button>
    <button class="login-btn" @click="login" v-else>se connecter</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import type { UserInterface } from "@/interfaces/user.interface";

export default defineComponent({
  name: "LoginView",
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  methods: {
    async login() {
      const token = import.meta.env.VITE_APP_FORTY_TWO_CLIENT_ID;
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
            .get("http://localhost:3001/auth/signout/" + this.userStore.user.id, {
            withCredentials: true,
          })
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
