import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MessageTitle } from "../message/MessageTitle";

export const TemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="messages.id"
          reference="Message"
          label="messages"
        >
          <SelectInput optionText={MessageTitle} />
        </ReferenceInput>
        <TextInput label="parameters" source="parameters" />
        <TextInput label="text" source="text" />
      </SimpleForm>
    </Create>
  );
};
