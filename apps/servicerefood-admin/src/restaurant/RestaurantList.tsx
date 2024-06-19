import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const RestaurantList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"RESTAURANTS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
