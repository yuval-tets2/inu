import { SortOrder } from "../../util/SortOrder";

export type MessageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  templateId?: SortOrder;
  updatedAt?: SortOrder;
  values?: SortOrder;
};
