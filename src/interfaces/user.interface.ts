import type { ChatInterface } from "./chat.interface";
import type { GameInterface } from "./game.interface";

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

export interface UserChat {
  id: string;
  status: UserChatStatus;
  permission: UserChatPermission;
  chat: ChatInterface;
  chatId: string;
  user: UserInterface;
  userId: string;
}

export interface UserGame {
  id: string;
  status?: UserGameStatus;
  score: number;
  game: GameInterface;
  gameId: string;
  user: UserInterface;
  userId: string;
}

export interface Friendship {
  id: string;
  accepted: boolean;
  createdAt: Date;
  updatedAt: Date;
  user: UserInterface;
  userId: string;
  friend: UserInterface;
  friendId: string;
}

enum UserStatus {
  ONLINE = "ONLINE",
  OFFLINE = "OFFLINE",
  PLAYING = "PLAYING",
}

enum UserRole {
  ADMIN = "ADMIN",
  USER = "USER",
}

enum UserChatStatus {
  OWNER = "OWNER",
  ADMIN = "ADMIN",
  MEMBER = "MEMBER",
}

enum UserChatPermission {
  BANNED = "BANNED",
  MUTED = "MUTED",
  KICKED = "KICKED",
  COMPLIANT = "COMPLIANT",
}

enum UserGameStatus {
  WINNER = "WINNER",
  LOSER = "LOSER",
  DRAW = "DRAW",
}
