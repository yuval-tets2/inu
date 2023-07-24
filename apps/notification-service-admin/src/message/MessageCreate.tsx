import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { TemplateTitle } from "../template/TemplateTitle";

export const MessageCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="template"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
        <TextInput label="values" source="values" />
      </SimpleForm>
    </Create>
  );
};
