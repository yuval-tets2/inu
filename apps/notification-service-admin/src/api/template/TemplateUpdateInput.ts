import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";

export type TemplateUpdateInput = {
  messages?: MessageWhereUniqueInput | null;
  parameters?: string | null;
  text?: string | null;
};
