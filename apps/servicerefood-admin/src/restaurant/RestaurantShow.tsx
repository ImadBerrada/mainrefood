import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const RestaurantShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="analyticsData" source="analyticsData" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="cuisine" source="cuisine" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="menuSchedule" source="menuSchedule" />
        <TextField label="name" source="name" />
        <TextField label="openingHours" source="openingHours" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="promotions" source="promotions" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
