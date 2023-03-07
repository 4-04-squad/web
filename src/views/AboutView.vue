<template>
  <MainLayout>
    <div id="page-about" class="main-page-content">
      <div class="head">
        <h1 class="title">About</h1>
      </div>
      <div class="grid content-wrapper">
        <div class="about-content">
          <h2>ft_transcendence</h2>
          <p>This project is a part of <a class="link" href="https://42lausanne.ch/">42Lausanne</a> school curriculum.</p>
          <p>
            The goal of this project is to create a web application that allows
            users to create and join chat rooms and send messages to each other.
          </p>
          <p>
            Users can also play pong with each other.
          </p>
          <p>
            The application is built using Vue 3 + Vite, TypeScript, NestJS, and build with docker and docker-compose.
          </p>
        </div>
        <div class="about-authors">
          <h2>Authors</h2>
          <div class="grid">
            <div v-for="author in authors">
              <a class="link link--author" :href="`https://github.com/${ author }`">
                <div class="grid">
                  <div class="avatar"></div>
                  <div>
                    <p>{{ author }}</p>
                      <a :href="`https://github.com/${ author }`">
                        <GithubIcon />
                      </a>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import MainLayout from "@/components/layout/layout/MainLayout.vue";
import { defineComponent } from "vue";
import {GithubIcon} from "@/components/icons";

export default defineComponent({
  name: "AboutView",
  components: {
    MainLayout,
    GithubIcon,
  },
  setup() {
    const authors = ["MarJC5", "Yace", "Tywael", "Yukiech", "BolleCola"];
    return {authors};
  },
});
</script>

<style lang="scss">
#page-about {

  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: var(--border-color);
  }

  svg {
    fill: var(--text-color);
  }

  .grid {
    grid-template-columns: 1fr 1fr;
  }

  .link {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: bold;

    &--author {
      color: var(--text-color);
      .grid {
        grid-template-columns: 1fr 3fr;
      }
    }

    &:hover {
      opacity: 0.8;
    }
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }

  .about-content {
    max-width: 400px;
  }
}
</style>
