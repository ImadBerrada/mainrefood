import * as graphql from "@nestjs/graphql";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { ReviewRatingService } from "./reviewrating.service";

export class ReviewRatingResolver {
  constructor(protected readonly service: ReviewRatingService) {}

  @graphql.Mutation(() => UserFindManyArgs)
  async RateMeal(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<UserFindManyArgs> {
    return this.service.RateMeal(args);
  }

  @graphql.Mutation(() => UserFindManyArgs)
  async ReviewRestaurant(
    @graphql.Args()
    args: UserFindManyArgs
  ): Promise<UserFindManyArgs> {
    return this.service.ReviewRestaurant(args);
  }
}
