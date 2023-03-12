export interface GameInterface {
	id: string;
	status: GameStatus;
	createdAt: Date;
	updatedAt: Date;
}

export type GameStatus = "WAITING" | "INPROGRESS" | "FINISHED";