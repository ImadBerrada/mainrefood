import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReviewRatingService } from "./reviewrating.service";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";

@swagger.ApiTags("reviewRatings")
@common.Controller("reviewRatings")
export class ReviewRatingController {
  constructor(protected readonly service: ReviewRatingService) {}

  @common.Post("/reviews/rate-meal")
  @swagger.ApiOkResponse({
    type: UserFindManyArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RateMeal(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<UserFindManyArgs> {
        return this.service.RateMeal(body);
      }

  @common.Post("/reviews/review-restaurant")
  @swagger.ApiOkResponse({
    type: UserFindManyArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReviewRestaurant(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<UserFindManyArgs> {
        return this.service.ReviewRestaurant(body);
      }
}
