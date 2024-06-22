import * as graphql from "@nestjs/graphql";
import { MealCreateInput } from "../meal/base/MealCreateInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { MealUpdateInput } from "../meal/base/MealUpdateInput";
import { MealManagementService } from "./mealmanagement.service";

export class MealManagementResolver {
  constructor(protected readonly service: MealManagementService) {}

  @graphql.Mutation(() => User)
  async AddMeal(
    @graphql.Args()
    args: MealCreateInput
  ): Promise<User> {
    return this.service.AddMeal(args);
  }

  @graphql.Mutation(() => User)
  async CategorizeMeal(
    @graphql.Args()
    args: MealCreateInput
  ): Promise<User> {
    return this.service.CategorizeMeal(args);
  }

  @graphql.Mutation(() => [User])
  async MealTags(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.MealTags(args);
  }

  @graphql.Query(() => [User])
  async NutritionalInformation(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.NutritionalInformation(args);
  }

  @graphql.Mutation(() => User)
  async SetExpiryDate(
    @graphql.Args()
    args: MealUpdateInput
  ): Promise<User> {
    return this.service.SetExpiryDate(args);
  }

  @graphql.Mutation(() => User)
  async UpdateAvailability(
    @graphql.Args()
    args: MealUpdateInput
  ): Promise<User> {
    return this.service.UpdateAvailability(args);
  }
}
