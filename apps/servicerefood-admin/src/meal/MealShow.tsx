import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { MEAL_TITLE_FIELD } from "./MealTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MealShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="expiryDate" source="expiryDate" />
        <TextField label="ID" source="id" />
        <TextField label="ingredients" source="ingredients" />
        <BooleanField label="isAvailable" source="isAvailable" />
        <TextField label="name" source="name" />
        <TextField label="nutritionalInfo" source="nutritionalInfo" />
        <TextField label="price" source="price" />
        <TextField label="tags" source="tags" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Order" target="mealId" label="ORDERS">
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
