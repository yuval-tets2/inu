import { Template } from "../template/Template";

export type Message = {
  createdAt: Date;
  id: string;
  template?: Template | null;
  updatedAt: Date;
  values: string | null;
};
