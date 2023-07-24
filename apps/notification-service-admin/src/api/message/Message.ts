import { Template } from "../template/Template";

export type Message = {
  createdAt: Date;
  description: string | null;
  id: string;
  template?: Template | null;
  updatedAt: Date;
  values: string | null;
};
