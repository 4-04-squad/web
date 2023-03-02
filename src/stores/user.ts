import type { UserInterface } from "@/interfaces/user.interface";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as UserInterface | null,
  }),
  actions: {
    setUser(user: UserInterface) {
      this.user = user;
    },
    clearUser() {
      this.user = null;
    },
  },
  persist: {
    enabled: true,
  },
});
