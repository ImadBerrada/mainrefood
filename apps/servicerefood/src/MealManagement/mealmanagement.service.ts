import { Injectable } from "@nestjs/common";
import { MealCreateInput } from "../meal/base/MealCreateInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { MealUpdateInput } from "../meal/base/MealUpdateInput";

@Injectable()
export class MealManagementService {
  constructor() {}
  async AddMeal(args: MealCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async CategorizeMeal(args: MealCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async MealTags(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async NutritionalInformation(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async SetExpiryDate(args: MealUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateAvailability(args: MealUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
}
