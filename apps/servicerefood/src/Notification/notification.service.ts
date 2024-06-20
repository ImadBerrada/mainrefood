import { Injectable } from "@nestjs/common";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { User } from "../user/base/User";

@Injectable()
export class NotificationService {
  constructor() {}
  async EventBasedNotifications(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async GeofencedAlerts(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async InteractiveNotifications(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async OrderConfirmation(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async OrderUpdates(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async PersonalizedNotifications(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async Promotions(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
}
