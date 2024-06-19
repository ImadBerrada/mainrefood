import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { MEAL_TITLE_FIELD } from "../meal/MealTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const OrderList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ORDERS"}
      perPage={50}
      pagination={<Pagination />}
    >
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
    </List>
  );
};
