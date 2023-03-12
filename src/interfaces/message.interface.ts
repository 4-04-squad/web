import type { ChatInterface } from "./chat.interface";

export interface MessageInterface {
  id: string;
  body: string;
  status?: MessageStatus;
  createdAt: Date;
  updatedAt: Date;
  chat: ChatInterface;
  chatId: string;
}

enum MessageStatus {
  RECEIVED = "RECEIVED",
  SENT = "SENT",
}
