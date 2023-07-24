import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageCreateInput = {
  description?: string | null;
  template?: TemplateWhereUniqueInput | null;
  values?: string | null;
};
