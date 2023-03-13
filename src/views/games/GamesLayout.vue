<template>
  <GameLayout>
    <div class="games-layout main-page-content">
      <div class="games-layout__container">
        <div class="games-layout__content">
          <router-view />
          <div class="games-list">
            <div v-for="game in [...waitingGames, ...inProgressGames, ...finishedGames]" :key="game.id" class="game-item">
              <GameLine :game="game" />
          </div>
          </div>
        </div>
      </div>
    </div>
  </GameLayout>
</template>

<script lang="ts">
  import GameLayout from "@/components/layout/layout/GameLayout.vue";
  import axios from "axios";
  import type { gameWithUserInterface } from "@/interfaces/game.interface";
  import { defineComponent, ref } from "vue";
  import GameLine from "@/components/game/GameLine.vue";

  const games = ref([] as gameWithUserInterface[]);
  const waitingGames = ref([] as gameWithUserInterface[]);
  const inProgressGames = ref([] as gameWithUserInterface[]);
  const finishedGames = ref([] as gameWithUserInterface[]);
  axios.get(`${import.meta.env.VITE_APP_API_URL}/games`, {
    withCredentials: true,
  })
  .then((response) => {
    games.value = response.data.games;
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error)
    })
   .finally(() => {
      // sort game by createdAt
      games.value.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
      // group games by status
      games.value.forEach((game) => {
        switch (game.status) {
          case "WAITING":
            waitingGames.value.push(game);
            break;
          case "INPROGRESS":
            inProgressGames.value.push(game);
            break;
          case "FINISHED":
            finishedGames.value.push(game);
            break;
        }
      });
      console.log(games.value)
    });


  export default defineComponent({
    name: "GamesLayout",
    components: {
      GameLayout,
      GameLine,
    },
    setup() {
      return {
        games,
        waitingGames,
        inProgressGames,
        finishedGames,
      };
    },
  });
</script>
