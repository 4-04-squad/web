<template>
  <div id="page-profile">
    <div class="head">
      <h1 class="title title--search">
        <span>
          Rechercher un utilisateur
        </span>
        <div class="search search--icon">
          <SearchIcon />
          <input type="text" v-model="searchValue" placeholder="Rechercher" />
        </div>
      </h1>
    </div>
    <EasyDataTable :headers="headers" :items="items" :theme-color="'var(--primary-color)'" :search-value="searchValue"
      buttons-pagination="true" 
      empty-message="Aucun utilisateur trouvé"
      :rows-items="[10, 15, 20]"
      rows-per-page="5"
      >
      <template #item-avatar="{ avatar, pseudo }">
        <a :href="`/users/${pseudo}`">
          <img class="avatar avatar--rounded medium" :src="avatar" :alt="pseudo" />
        </a>
      </template>
      <template #item-pseudo="{ pseudo }">
        <a :href="`/users/${pseudo}`">
          <span>{{ pseudo }}</span>
        </a>
      </template>
      <template #item-email="{ email }">
        <span>{{ email }}</span>
      </template>
      <template #item-status="{ status }">
        <span :class="`status ${status.toLowerCase()}`">{{ status }}</span>
      </template>
      <template #item-profile="{ profile }">
        <a :href="`/users/${profile}`">
          <button class="btn btn--icon">
            <ExternalLinkIcon /> voir le profil
          </button>
        </a>
      </template>
    </EasyDataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import axios from "axios";
import router from "@/router";
import type { Header, Item } from "vue3-easy-data-table";
import EasyDataTable from "vue3-easy-data-table";
import type { UserInterface } from "@/interfaces/user.interface";
import {
  SearchIcon,
  ExternalLinkIcon,
} from "@/components/icons";

export default defineComponent({
  name: "UsersView",
  components: {
    EasyDataTable,
    SearchIcon,
    ExternalLinkIcon,
  },
  setup() {
    const searchValue = ref("");

    const users = ref([] as UserInterface[]);
    const headers = [
      { text: "AVATAR", value: "avatar", sortable: false },
      { text: "PSEUDO", value: "pseudo" },
      { text: "EMAIL", value: "email" },
      { text: "STATUS", value: "status", sortable: true },
      { text: "", value: "profile" }
    ] as Header[];
    const items = ref([] as Item[]);

    axios.get(`${import.meta.env.VITE_APP_API_URL}/users`, {
      withCredentials: true,
    })
      .then((response) => {
        users.value = response.data.users;
        items.value = users.value.map((user) => ({
          avatar: user.avatar,
          pseudo: user.pseudo,
          email: user.email,
          status: user.status,
          profile: user.pseudo,
        })) as Item[];
      })
      .catch((error) => {
        console.log(error);
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data);
          if (error.response?.status == 401) {
            router.push({ path: "/login" });
          }
        }
      });

    return {
      searchValue,
      headers,
      items,
    };
  },
});
</script>
