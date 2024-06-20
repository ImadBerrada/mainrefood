import * as graphql from "@nestjs/graphql";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { User } from "../user/base/User";
import { NotificationService } from "./notification.service";

export class NotificationResolver {
  constructor(protected readonly service: NotificationService) {}

  @graphql.Mutation(() => [User])
  async EventBasedNotifications(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.EventBasedNotifications(args);
  }

  @graphql.Mutation(() => [User])
  async GeofencedAlerts(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.GeofencedAlerts(args);
  }

  @graphql.Mutation(() => [User])
  async InteractiveNotifications(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.InteractiveNotifications(args);
  }

  @graphql.Mutation(() => [User])
  async OrderConfirmation(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.OrderConfirmation(args);
  }

  @graphql.Mutation(() => [User])
  async OrderUpdates(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.OrderUpdates(args);
  }

  @graphql.Mutation(() => [User])
  async PersonalizedNotifications(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.PersonalizedNotifications(args);
  }

  @graphql.Mutation(() => [User])
  async Promotions(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<User[]> {
    return this.service.Promotions(args);
  }
}
