import { Injectable } from "@nestjs/common";
import { UserCreateInput } from "../user/base/UserCreateInput";
import { User } from "../user/base/User";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { UserUpdateInput } from "../user/base/UserUpdateInput";

@Injectable()
export class UserManagementService {
  constructor() {}
  async FollowRestaurant(args: UserCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async Login(args: UserCreateInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async OrderHistory(args: UserFindManyArgs): Promise<User[]> {
    throw new Error("Not implemented");
  }
  async ReferralProgram(args: UserCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async Register(args: UserCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async SocialMediaIntegration(args: UserCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UpdateProfile(args: UserUpdateInput): Promise<User> {
    throw new Error("Not implemented");
  }
  async UserPreferences(args: UserCreateInput): Promise<User> {
    throw new Error("Not implemented");
  }
}
