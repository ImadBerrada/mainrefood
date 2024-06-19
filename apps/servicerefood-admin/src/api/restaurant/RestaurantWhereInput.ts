import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type RestaurantWhereInput = {
  analyticsData?: StringNullableFilter;
  cuisine?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  menuSchedule?: StringNullableFilter;
  name?: StringNullableFilter;
  openingHours?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  promotions?: StringNullableFilter;
};
