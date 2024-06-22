import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrderManagementService } from "./ordermanagement.service";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { User } from "../user/base/User";

@swagger.ApiTags("orderManagements")
@common.Controller("orderManagements")
export class OrderManagementController {
  constructor(protected readonly service: OrderManagementService) {}

  @common.Delete("/orders/cancel")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CancelOrder(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User> {
        return this.service.CancelOrder(body);
      }

  @common.Patch("/orders/customize")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async OrderCustomization(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User> {
        return this.service.OrderCustomization(body);
      }

  @common.Get("/:id/place-order")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PlaceOrder(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<string> {
        return this.service.PlaceOrder(body);
      }

  @common.Post("/orders/schedule-pickup")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScheduledPickup(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User> {
        return this.service.ScheduledPickup(body);
      }

  @common.Get("/orders/track")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async TrackOrder(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.TrackOrder(body);
      }
}
