import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const MealList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"MEALS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
