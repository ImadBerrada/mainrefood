import { Module } from "@nestjs/common";
import { ReviewRatingService } from "./reviewrating.service";
import { ReviewRatingController } from "./reviewrating.controller";
import { ReviewRatingResolver } from "./reviewrating.resolver";

@Module({
  controllers: [ReviewRatingController],
  providers: [ReviewRatingService, ReviewRatingResolver],
  exports: [ReviewRatingService],
})
export class ReviewRatingModule {}
