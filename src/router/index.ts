import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: () => import("@/views/auth/AuthLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: "/signout/:id",
          name: "signout",
          component: () => import("@/views/auth/LoginView.vue"),
        },
      ],
    },
    {
      path: "/users",
      name: "users",
      component: () => import("@/views/users/UsersLayout.vue"),
      children: [
        {
          path: "/profile",
          name: "profile",
          component: () => import("@/views/users/ProfileView.vue"),
        },
        {
          path: "/users/:id",
          name: "user",
          component: () => import("@/views/users/ProfileView.vue"),
        },
        {
          path: "/users/all",
          name: "users-all",
          component: () => import("@/views/users/UsersView.vue"),
        }
      ],
    },
    {
      path: "/chats",
      name: "chats",
      component: () => import("@/views/chats/ChatsLayout.vue"),
      children: [
        {
          path: "/chats/:id",
          name: "chat",
          component: () => import("@/views/chats/ChatsView.vue"),
        },
      ],
    },
    {
      path: "/channels",
      name: "channels",
      component: () => import("@/views/channels/ChannelsLayout.vue"),
      children: [
        {
          path: "/channels/:id",
          name: "channel",
          component: () => import("@/views/channels/ChannelsView.vue"),
        },
      ],
    },
    {
      path: "/games",
      name: "games",
      component: () => import("@/views/games/GamesLayout.vue"),
      children: [
        {
          path: "/games/:id",
          name: "games",
          component: () => import("@/views/games/GamesView.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "home",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
  ],
});

export default router;
