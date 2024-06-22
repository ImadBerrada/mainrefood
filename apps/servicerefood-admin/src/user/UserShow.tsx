import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MEAL_TITLE_FIELD } from "../meal/MealTitle";
import { USER_TITLE_FIELD } from "./UserTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="preferences" source="preferences" />
        <TextField label="referralCode" source="referralCode" />
        <TextField label="role" source="role" />
        <TextField label="Roles" source="roles" />
        <TextField label="socialMedia" source="socialMedia" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Order" target="userId" label="ORDERS">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="customization" source="customization" />
            <TextField label="ID" source="id" />
            <ReferenceField label="meal" source="meal.id" reference="Meal">
              <TextField source={MEAL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="mealId" source="mealId" />
            <TextField label="orderDate" source="orderDate" />
            <TextField label="pickupTime" source="pickupTime" />
            <TextField label="status" source="status" />
            <TextField label="totalAmount" source="totalAmount" />
            <TextField label="trackingInfo" source="trackingInfo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="userId" source="userId" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
