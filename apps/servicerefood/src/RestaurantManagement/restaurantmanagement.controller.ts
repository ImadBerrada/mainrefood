import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RestaurantManagementService } from "./restaurantmanagement.service";
import { User } from "../user/base/User";

@swagger.ApiTags("restaurantManagements")
@common.Controller("restaurantManagements")
export class RestaurantManagementController {
  constructor(protected readonly service: RestaurantManagementService) {}

  @common.Post("/meals/add")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddMeal(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.AddMeal(body);
      }

  @common.Get("/:id/add-restaurant")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddRestaurant(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddRestaurant(body);
      }

  @common.Get("/analytics-dashboard")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AnalyticsDashboard(
    @common.Body()
    body: string
  ): Promise<User[]> {
        return this.service.AnalyticsDashboard(body);
      }

  @common.Delete("/meals/delete")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async DeleteMeal(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.DeleteMeal(body);
      }

  @common.Post("/menu-scheduling")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MenuScheduling(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.MenuScheduling(body);
      }

  @common.Post("/promotional-tools")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PromotionalTools(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.PromotionalTools(body);
      }

  @common.Patch("/meals/update")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateMeal(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.UpdateMeal(body);
      }

  @common.Patch("/order-status")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateOrderStatus(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.UpdateOrderStatus(body);
      }

  @common.Patch("/update-restaurant")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateRestaurantInfo(
    @common.Body()
    body: string
  ): Promise<User> {
        return this.service.UpdateRestaurantInfo(body);
      }

  @common.Get("/:id/view-orders")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ViewOrders(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.ViewOrders(body);
      }
}
