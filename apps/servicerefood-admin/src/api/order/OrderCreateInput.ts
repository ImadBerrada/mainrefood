import { MealWhereUniqueInput } from "../meal/MealWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  customization?: string | null;
  meal?: MealWhereUniqueInput | null;
  mealId?: number | null;
  orderDate?: Date | null;
  pickupTime?: Date | null;
  status?: string | null;
  totalAmount?: number | null;
  trackingInfo?: string | null;
  user?: UserWhereUniqueInput | null;
  userId?: number | null;
};
