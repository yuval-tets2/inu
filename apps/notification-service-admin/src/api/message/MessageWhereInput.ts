import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type MessageWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  template?: TemplateWhereUniqueInput;
  values?: StringNullableFilter;
};
