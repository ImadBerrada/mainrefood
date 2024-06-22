import { SortOrder } from "../../util/SortOrder";

export type MealOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  expiryDate?: SortOrder;
  id?: SortOrder;
  ingredients?: SortOrder;
  isAvailable?: SortOrder;
  name?: SortOrder;
  nutritionalInfo?: SortOrder;
  price?: SortOrder;
  tags?: SortOrder;
  updatedAt?: SortOrder;
};
