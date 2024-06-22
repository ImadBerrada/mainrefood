import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { MealTitle } from "../meal/MealTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customization" multiline source="customization" />
        <ReferenceInput source="meal.id" reference="Meal" label="meal">
          <SelectInput optionText={MealTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="mealId" source="mealId" />
        <DateTimeInput label="orderDate" source="orderDate" />
        <DateTimeInput label="pickupTime" source="pickupTime" />
        <TextInput label="status" source="status" />
        <NumberInput label="totalAmount" source="totalAmount" />
        <TextInput label="trackingInfo" multiline source="trackingInfo" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="userId" source="userId" />
      </SimpleForm>
    </Create>
  );
};
