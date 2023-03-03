<template>
  <div id="page-login" class="grid">
    <div class="column page-thumb">

</div>
<div class="column page-content">
  <h1>Login</h1>
  <p v-if="userStore.user">Connecté en tant que {{ userStore.user.pseudo }}</p>
  <p v-else>Connectez-vous pour accéder à votre espace</p>
  <button class="btn" @click="logout" v-if="userStore.user">
    se deconnecter
  </button>
  <button class="btn btn--icon" @click="login" v-else>
    <QDIcon />
    profile 42
  </button>
</div>
  </div>
</template>

<style lang="scss" scoped>
#page-login {
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  .column {
    height: 100%;

    &.page-thumb {
      background-color: var(--border-color);
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    &.page-content {
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      flex-direction: column;
      padding: 1rem;

      h1 {
        text-transform: uppercase;
        font-weight: bold;
        text-align: center;
        margin-bottom: 2rem;
        padding: 1rem;
        border-bottom: 2px solid var(--text-color);
      }

      p {
        text-align: center;
        margin-bottom: 4rem;
      }
    }
  }

}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/user";
import type { UserInterface } from "@/interfaces/user.interface";
import { QDIcon } from "@/components/icons";

export default defineComponent({
  name: "LoginView",
  components: {
    QDIcon,
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
