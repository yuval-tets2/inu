import { Message } from "../message/Message";

export type Template = {
  createdAt: Date;
  id: string;
  messages?: Message | null;
  parameters: string | null;
  text: string | null;
  updatedAt: Date;
};
