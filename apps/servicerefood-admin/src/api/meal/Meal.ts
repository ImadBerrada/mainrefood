import { Order } from "../order/Order";

export type Meal = {
  category: string | null;
  createdAt: Date;
  description: string | null;
  expiryDate: Date | null;
  id: string;
  ingredients: string | null;
  isAvailable: boolean | null;
  name: string | null;
  nutritionalInfo: string | null;
  orders?: Array<Order>;
  price: number | null;
  tags: string | null;
  updatedAt: Date;
};
