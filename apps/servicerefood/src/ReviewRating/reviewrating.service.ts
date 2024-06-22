import { Injectable } from "@nestjs/common";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";

@Injectable()
export class ReviewRatingService {
  constructor() {}
  async RateMeal(args: UserFindManyArgs): Promise<UserFindManyArgs> {
    throw new Error("Not implemented");
  }
  async ReviewRestaurant(args: UserFindManyArgs): Promise<UserFindManyArgs> {
    throw new Error("Not implemented");
  }
}
