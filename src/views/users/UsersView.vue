<template>
  <div id="page-profile">
    <Table 
      caption="Tous les utilisateurs" 
      className="users"
      :data="users"
      :fields="['status', 'pseudo']"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { UserInterface } from "@/interfaces/user.interface";
import axios from "axios";
import router from "@/router";
import Table from "@/components/ui/Table.vue";

export default defineComponent({
  name: "UsersView",
  components: {
    Table,
  },
  data() {
    return {
      users: {
        type: Array as () => UserInterface[],
        default: () => [],
      },
    };
  },
  async created() {
    try {
      const response = await axios
        .get(`${import.meta.env.VITE_APP_API_URL}/users`, {
          withCredentials: true,
        })
        .then((res) => {
          // save the users
          this.users = res.data.users;
        })
        .catch((err) => {
          if (err.response.status == 401) router.push({ path: "/login" });
        });
    } catch (error: any) {
      console.log(error);
    }
  },
});
</script>
