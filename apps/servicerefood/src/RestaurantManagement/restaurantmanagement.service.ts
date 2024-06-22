import { Injectable } from "@nestjs/common";
import { MealCreateInput } from "../meal/base/MealCreateInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { MealWhereInput } from "../meal/base/MealWhereInput";
import { MealUpdateInput } from "../meal/base/MealUpdateInput";
import { RestaurantUpdateInput } from "../restaurant/base/RestaurantUpdateInput";

@Injectable()
export class RestaurantManagementService {
  constructor() {}
  async AddMeal(args: MealCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async AddRestaurant(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async AnalyticsDashboard(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async DeleteMeal(args: MealWhereInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async MenuScheduling(args: MealCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async PromotionalTools(args: MealCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateMeal(args: MealUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateOrderStatus(args: MealWhereInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateRestaurantInfo(args: RestaurantUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async ViewOrders(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
