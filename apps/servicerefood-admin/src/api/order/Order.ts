import { Meal } from "../meal/Meal";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  customization: string | null;
  id: string;
  meal?: Meal | null;
  mealId: number | null;
  orderDate: Date | null;
  pickupTime: Date | null;
  status: string | null;
  totalAmount: number | null;
  trackingInfo: string | null;
  updatedAt: Date;
  user?: User | null;
  userId: number | null;
};
