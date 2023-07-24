import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageUpdateInput = {
  template?: TemplateWhereUniqueInput | null;
  values?: string | null;
};
