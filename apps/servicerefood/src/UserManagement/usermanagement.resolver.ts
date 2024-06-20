import * as graphql from "@nestjs/graphql";
import { UserCreateInput } from "../user/base/UserCreateInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { UserUpdateInput } from "../user/base/UserUpdateInput";
import { UserManagementService } from "./usermanagement.service";

export class UserManagementResolver {
  constructor(protected readonly service: UserManagementService) {}

  @graphql.Mutation(() => User)
  async FollowRestaurant(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<User> {
    return this.service.FollowRestaurant(args);
  }

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Query(() => [User])
  async OrderHistory(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.OrderHistory(args);
  }

  @graphql.Mutation(() => User)
  async ReferralProgram(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<User> {
    return this.service.ReferralProgram(args);
  }

  @graphql.Mutation(() => User)
  async Register(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<User> {
    return this.service.Register(args);
  }

  @graphql.Mutation(() => User)
  async SocialMediaIntegration(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<User> {
    return this.service.SocialMediaIntegration(args);
  }

  @graphql.Mutation(() => User)
  async UpdateProfile(
    @graphql.Args()
    args: UserUpdateInput
  ): Promise<User> {
    return this.service.UpdateProfile(args);
  }

  @graphql.Mutation(() => User)
  async UserPreferences(
    @graphql.Args()
    args: UserCreateInput
  ): Promise<User> {
    return this.service.UserPreferences(args);
  }
}
