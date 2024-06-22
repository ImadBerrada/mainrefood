import * as graphql from "@nestjs/graphql";
import { MealWhereInput } from "../meal/base/MealWhereInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { OrderManagementService } from "./ordermanagement.service";

export class OrderManagementResolver {
  constructor(protected readonly service: OrderManagementService) {}

  @graphql.Mutation(() => User)
  async CancelOrder(
    @graphql.Args()
    args: MealWhereInput
  ): Promise<User> {
    return this.service.CancelOrder(args);
  }

  @graphql.Mutation(() => User)
  async OrderCustomization(
    @graphql.Args()
    args: MealWhereInput
  ): Promise<User> {
    return this.service.OrderCustomization(args);
  }

  @graphql.Query(() => String)
  async PlaceOrder(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.PlaceOrder(args);
  }

  @graphql.Mutation(() => User)
  async ScheduledPickup(
    @graphql.Args()
    args: MealWhereInput
  ): Promise<User> {
    return this.service.ScheduledPickup(args);
  }

  @graphql.Query(() => [User])
  async TrackOrder(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.TrackOrder(args);
  }
}
