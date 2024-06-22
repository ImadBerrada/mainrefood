import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const MealEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <DateTimeInput label="expiryDate" source="expiryDate" />
        <TextInput label="ingredients" multiline source="ingredients" />
        <BooleanInput label="isAvailable" source="isAvailable" />
        <TextInput label="name" source="name" />
        <TextInput label="nutritionalInfo" multiline source="nutritionalInfo" />
        <ReferenceArrayInput
          source="orders"
          reference="Order"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrderTitle} />
        </ReferenceArrayInput>
        <NumberInput label="price" source="price" />
        <TextInput label="tags" multiline source="tags" />
      </SimpleForm>
    </Edit>
  );
};
