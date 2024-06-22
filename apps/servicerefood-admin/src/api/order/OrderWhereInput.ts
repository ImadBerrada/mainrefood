import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  customization?: StringNullableFilter;
  id?: StringFilter;
  meal?: MealWhereUniqueInput;
  mealId?: IntNullableFilter;
  orderDate?: DateTimeNullableFilter;
  pickupTime?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  totalAmount?: FloatNullableFilter;
  trackingInfo?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  userId?: IntNullableFilter;
};
