import { SortOrder } from "../../util/SortOrder";

export type RestaurantOrderByInput = {
  analyticsData?: SortOrder;
  createdAt?: SortOrder;
  cuisine?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  menuSchedule?: SortOrder;
  name?: SortOrder;
  openingHours?: SortOrder;
  phoneNumber?: SortOrder;
  promotions?: SortOrder;
  updatedAt?: SortOrder;
};
