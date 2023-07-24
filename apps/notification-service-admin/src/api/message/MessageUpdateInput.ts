import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageUpdateInput = {
  description?: string | null;
  template?: TemplateWhereUniqueInput | null;
  values?: string | null;
};
