import type { UserInterface } from "/app/src/interfaces/user.interface";

export interface GameInterface {
	id: string;
	status: GameStatus;
	createdAt: Date;
	updatedAt: Date;
}

export type GameStatus = "WAITING" | "INPROGRESS" | "FINISHED";

export interface UserGameInteface {
	id: string
	status: UserGameStatus | null
	score: number
	gameId: string
	userId: string
}

export type UserGameStatus = "WINNER" | "LOSER" | "DRAW";

export interface gameWithUserInterface extends GameInterface {
	userGames: UserGameInteface[]
	users: UserInterface[]
}
