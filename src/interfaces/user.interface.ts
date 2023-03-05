export interface UserInterface {
  id: string;
  fortyTwoId?: number;
  pseudo: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  about?: string;
  experience: bigint;
  status: UserStatus;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
  chats: UserChat[];
  games: UserGame[];
  friendRequest: Friendship[];
  friends: Friendship[];
  blockers: UserInterface[];
  blocked: UserInterface[];
}

export type UserStatus = "ONLINE" | "OFFLINE" | "AWAY";
export type UserRole = "USER" | "ADMIN";

export interface UserChat {
  // define properties of UserChat here
}

export interface UserGame {
  // define properties of UserGame here
}

export interface Friendship {
  // define properties of Friendship here
}
