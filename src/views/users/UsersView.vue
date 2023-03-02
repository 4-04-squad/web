<template>
  <div id="page-profile">
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { UserInterface } from "@/interfaces/user.interface";
import axios from "axios";
import router from "@/router";

export default defineComponent({
  name: "UsersView",
  data() {
    return {
      users: {
        type: Array as () => UserInterface[],
        default: () => [],
      },
    }
  },
  created() {
    try {
        const response = axios
          .get("http://localhost:3001/users", {
            withCredentials: true,
          })
          .then((res) => {
            // set the user in the store
            console.log(res)
            this.users = res.data as UserInterface[] 
          })
          .catch((err) => {
            if (err.response.status == 401)
              router.push({ path: '/login' })
          });
      } catch (error: any) {
        console.log(error);
      }
  }
});
</script>
