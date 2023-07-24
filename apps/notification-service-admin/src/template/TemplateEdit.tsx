import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { MessageTitle } from "../message/MessageTitle";

export const TemplateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
