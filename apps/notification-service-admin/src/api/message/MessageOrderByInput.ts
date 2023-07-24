import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
  values?: SortOrder;
};
