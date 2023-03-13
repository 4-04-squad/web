<template>
	<div class="game-line">
	  <div class="game-status">{{ game.status }}</div>
	  <div class="game-time">{{ new Date(game.createdAt).toLocaleString() }}</div>
	  <div class="game-player">
		<img :src="game.users[0]?.avatar || 'https://via.placeholder.com/30x30?text=No+avatar'" :alt="game.users[0]?.pseudo || 'Pending'" />
		<div class="game-player-pseudo">{{ game.users[0]?.pseudo || 'Pending' }}</div>
	  </div>
	  <div v-if="game.users.length > 1" class="game-player">
		<img :src="game.users[1]?.avatar || 'https://via.placeholder.com/30x30?text=No+avatar'" :alt="game.users[1]?.pseudo || 'Pending'" />
		<div class="game-player-pseudo">{{ game.users[1]?.pseudo || 'Pending' }}</div>
	  </div>
	</div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import type { gameWithUserInterface } from "@/interfaces/game.interface";
  
  export default defineComponent({
	name: "GameLine",
	props: {
	  game: {
		type: Object as () => gameWithUserInterface,
		required: true,
	  },
	},
	setup(props) {
	  return {
		game: props.game,
	  };
	},
  });
  </script>
  
  <style scoped>
  .game-line {
	display: flex;
	align-items: center;
	margin-bottom: 10px;
	font-size: 14px;
  }
  
  .game-status {
	width: 80px;
	margin-right: 10px;
	text-transform: uppercase;
  }
  
  .game-time {
	width: 120px;
	margin-right: 10px;
  }
  
  .game-player {
	display: flex;
	align-items: center;
	margin-right: 10px;
  }
  
  .game-player img {
	width: 30px;
	height: 30px;
	margin-right: 5px;
	border-radius: 50%;
  }
  
  .game-player-pseudo {
	font-weight: bold;
  }
  </style>