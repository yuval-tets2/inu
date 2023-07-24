import { StringFilter } from "../../util/StringFilter";
import { MessageWhereUniqueInput } from "../message/MessageWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TemplateWhereInput = {
  id?: StringFilter;
  messages?: MessageWhereUniqueInput;
  parameters?: StringNullableFilter;
  text?: StringNullableFilter;
};
