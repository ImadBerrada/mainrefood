import { OrderUpdateManyWithoutMealsInput } from "./OrderUpdateManyWithoutMealsInput";

export type MealUpdateInput = {
  category?: string | null;
  description?: string | null;
  expiryDate?: Date | null;
  ingredients?: string | null;
  isAvailable?: boolean | null;
  name?: string | null;
  nutritionalInfo?: string | null;
  orders?: OrderUpdateManyWithoutMealsInput;
  price?: number | null;
  tags?: string | null;
};
