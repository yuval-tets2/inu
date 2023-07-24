import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { TemplateTitle } from "../template/TemplateTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="template"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
        <TextInput label="values" source="values" />
      </SimpleForm>
    </Edit>
  );
};
