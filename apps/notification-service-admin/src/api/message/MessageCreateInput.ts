import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageCreateInput = {
  template?: TemplateWhereUniqueInput | null;
  values?: string | null;
};
