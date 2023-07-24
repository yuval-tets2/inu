import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MessageWhereInput = {
  id?: StringFilter;
  template?: TemplateWhereUniqueInput;
  values?: StringNullableFilter;
};
