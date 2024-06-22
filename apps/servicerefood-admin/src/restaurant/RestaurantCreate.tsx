import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const RestaurantCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="analyticsData" source="analyticsData" />
        <TextInput label="cuisine" source="cuisine" />
        <TextInput label="location" source="location" />
        <TextInput label="menuSchedule" source="menuSchedule" />
        <TextInput label="name" source="name" />
        <TextInput label="openingHours" source="openingHours" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <TextInput label="promotions" source="promotions" />
      </SimpleForm>
    </Create>
  );
};
