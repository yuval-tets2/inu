import { SortOrder } from "../../util/SortOrder";

export type TemplateOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  messagesId?: SortOrder;
  parameters?: SortOrder;
  text?: SortOrder;
  updatedAt?: SortOrder;
};
