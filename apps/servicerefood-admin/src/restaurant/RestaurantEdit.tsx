import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const RestaurantEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
