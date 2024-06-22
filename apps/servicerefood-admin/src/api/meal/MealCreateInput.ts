import { OrderCreateNestedManyWithoutMealsInput } from "./OrderCreateNestedManyWithoutMealsInput";

export type MealCreateInput = {
  category?: string | null;
  description?: string | null;
  expiryDate?: Date | null;
  ingredients?: string | null;
  isAvailable?: boolean | null;
  name?: string | null;
  nutritionalInfo?: string | null;
  orders?: OrderCreateNestedManyWithoutMealsInput;
  price?: number | null;
  tags?: string | null;
};
