import type { UserInterface } from "@/interfaces/user.interface";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: undefined as UserInterface | undefined,
  }),
  actions: {
    setUser(user: UserInterface | undefined) {
      this.user = user;
    },
    clearUser() {
      this.user = undefined as UserInterface | undefined;
    },
  },
  persist: {
    enabled: true,
  },
});
