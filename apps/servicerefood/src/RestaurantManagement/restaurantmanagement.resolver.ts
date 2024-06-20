import * as graphql from "@nestjs/graphql";
import { MealCreateInput } from "../meal/base/MealCreateInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { MealWhereInput } from "../meal/base/MealWhereInput";
import { MealUpdateInput } from "../meal/base/MealUpdateInput";
import { RestaurantUpdateInput } from "../restaurant/base/RestaurantUpdateInput";
import { RestaurantManagementService } from "./restaurantmanagement.service";

export class RestaurantManagementResolver {
  constructor(protected readonly service: RestaurantManagementService) {}

  @graphql.Mutation(() => User)
  async AddMeal(
    @graphql.Args()
    args: MealCreateInput
  ): Promise<User> {
    return this.service.AddMeal(args);
  }

  @graphql.Query(() => String)
  async AddRestaurant(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AddRestaurant(args);
  }

  @graphql.Query(() => [User])
  async AnalyticsDashboard(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.AnalyticsDashboard(args);
  }

  @graphql.Mutation(() => User)
  async DeleteMeal(
    @graphql.Args()
    args: MealWhereInput
  ): Promise<User> {
    return this.service.DeleteMeal(args);
  }

  @graphql.Mutation(() => User)
  async MenuScheduling(
    @graphql.Args()
    args: MealCreateInput
  ): Promise<User> {
    return this.service.MenuScheduling(args);
  }

  @graphql.Mutation(() => User)
  async PromotionalTools(
    @graphql.Args()
    args: MealCreateInput
  ): Promise<User> {
    return this.service.PromotionalTools(args);
  }

  @graphql.Mutation(() => User)
  async UpdateMeal(
    @graphql.Args()
    args: MealUpdateInput
  ): Promise<User> {
    return this.service.UpdateMeal(args);
  }

  @graphql.Mutation(() => User)
  async UpdateOrderStatus(
    @graphql.Args()
    args: MealWhereInput
  ): Promise<User> {
    return this.service.UpdateOrderStatus(args);
  }

  @graphql.Mutation(() => User)
  async UpdateRestaurantInfo(
    @graphql.Args()
    args: RestaurantUpdateInput
  ): Promise<User> {
    return this.service.UpdateRestaurantInfo(args);
  }

  @graphql.Query(() => String)
  async ViewOrders(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ViewOrders(args);
  }
}
