import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      meta: {
        title: "Authentification",
      },
      component: () => import("@/views/auth/AuthLayout.vue"),
      children: [
        {
          path: "/login",
          name: "login",
          meta: {
            title: "Login",
          },
          component: () => import("@/views/auth/LoginView.vue"),
        },
        {
          path: "/signout/:id",
          name: "signout",
          meta: {
            title: "Signout",
          },
          component: () => import("@/views/auth/LoginView.vue"),
        },
      ],
    },
    {
      path: "/users",
      name: "users",
      meta: {
        title: "Utilisateurs",
      },
      component: () => import("@/views/users/UsersLayout.vue"),
      children: [
        {
          path: "/profile",
          name: "profile",
          meta: {
            title: "Profile",
          },
          component: () => import("@/views/users/ProfileView.vue"),
        },
        {
          path: "/users/:pseudo",
          name: "user",
          meta: {
            title: (route: { params: { pseudo: any; }; }) => `Profile de ${route.params.pseudo} - ${import.meta.env.VITE_APP_TITLE}`,
          },
          component: () => import("@/views/users/ProfileView.vue"),
        },
        {
          path: "/users/:id",
          name: "user-edit",
          meta: {
            title: "Editer un utilisateur",
          },
          component: () => import("@/views/users/UsersEditView.vue"),
        },
        {
          path: "/users/all",
          name: "users-all",
          meta: {
            title: "Tous les utilisateurs",
          },
          component: () => import("@/views/users/UsersView.vue"),
        },
      ],
    },
    {
      path: "/chats",
      name: "chats",
      meta: {
        title: "Chats",
      },
      component: () => import("@/views/chats/ChatsLayout.vue"),
      children: [
        {
          path: "/chats/:id",
          name: "chat",
          meta: {
            title: "Chat",
          },
          component: () => import("@/views/chats/ChatsView.vue"),
        },
      ],
    },
    {
      path: "/channels",
      name: "channels",
      meta: {
        title: "Channels",
      },
      component: () => import("@/views/channels/ChannelsLayout.vue"),
      children: [
        {
          path: "/channels/:id",
          name: "channel",
          meta: {
            title: "Channel",
          },
          component: () => import("@/views/channels/ChannelsView.vue"),
        },
      ],
    },
    {
      path: "/games",
      name: "games",
      meta: {
        title: "Games",
      },
      component: () => import("@/views/games/GamesLayout.vue"),
      children: [
        {
          path: "/games/:id",
          name: "games",
          meta: {
            title: "Game",
          },
          component: () => import("@/views/games/GamesView.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "home",
      meta: {
        title: "Accueil",
      },
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      meta: {
        title: "A propos",
      },
      component: () => import("@/views/AboutView.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = typeof to.meta.title === 'function'
      ? to.meta.title(to)
      : `${to.meta.title} - ${import.meta.env.VITE_APP_TITLE}`;
  } else {
    document.title = `${import.meta.env.VITE_APP_TITLE}`;
  }
  next();
});

export default router;
