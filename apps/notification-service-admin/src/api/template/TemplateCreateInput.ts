import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type TemplateCreateInput = {
  messages?: MessageWhereUniqueInput | null;
  parameters?: string | null;
  text?: string | null;
};
