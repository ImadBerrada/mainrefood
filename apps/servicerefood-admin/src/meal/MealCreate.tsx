import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const MealCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
