import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { MEAL_TITLE_FIELD } from "../meal/MealTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
