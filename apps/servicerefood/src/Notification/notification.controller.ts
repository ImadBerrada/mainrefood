import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { NotificationService } from "./notification.service";
import { UserFindManyArgs } from "../user/base/UserFindManyArgs";
import { User } from "../user/base/User";

@swagger.ApiTags("notifications")
@common.Controller("notifications")
export class NotificationController {
  constructor(protected readonly service: NotificationService) {}

  @common.Post("/notifications/event-based")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async EventBasedNotifications(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.EventBasedNotifications(body);
      }

  @common.Post("/notifications/geofenced-alerts")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GeofencedAlerts(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.GeofencedAlerts(body);
      }

  @common.Post("/notifications/interactive")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async InteractiveNotifications(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.InteractiveNotifications(body);
      }

  @common.Post("/notifications/order-confirmation")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async OrderConfirmation(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.OrderConfirmation(body);
      }

  @common.Post("/notifications/order-updates")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async OrderUpdates(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.OrderUpdates(body);
      }

  @common.Post("/notifications/personalized")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PersonalizedNotifications(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.PersonalizedNotifications(body);
      }

  @common.Post("/notifications/promotions")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Promotions(
    @common.Body()
    body: UserFindManyArgs
  ): Promise<User[]> {
        return this.service.Promotions(body);
      }
}
