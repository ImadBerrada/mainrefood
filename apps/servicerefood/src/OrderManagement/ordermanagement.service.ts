import { Injectable } from "@nestjs/common";
import { MealWhereInput } from "../meal/base/MealWhereInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";

@Injectable()
export class OrderManagementService {
  constructor() {}
  async CancelOrder(args: MealWhereInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async OrderCustomization(args: MealWhereInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async PlaceOrder(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async ScheduledPickup(args: MealWhereInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async TrackOrder(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
}
