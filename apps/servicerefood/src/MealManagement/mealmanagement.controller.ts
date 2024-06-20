import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MealManagementService } from "./mealmanagement.service";
import { MealUpdateInput } from "../meal/base/MealUpdateInput";
import { User } from "../user/base/User";

@swagger.ApiTags("mealManagements")
@common.Controller("mealManagements")
export class MealManagementController {
  constructor(protected readonly service: MealManagementService) {}

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
    body: MealUpdateInput
  ): Promise<User> {
        return this.service.AddMeal(body);
      }

  @common.Post("/meals/categorize")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CategorizeMeal(
    @common.Body()
    body: MealUpdateInput
  ): Promise<User> {
        return this.service.CategorizeMeal(body);
      }

  @common.Post("/meals/tags")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async MealTags(
    @common.Body()
    body: MealUpdateInput
  ): Promise<User[]> {
        return this.service.MealTags(body);
      }

  @common.Get("/meals/nutritional-info")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async NutritionalInformation(
    @common.Body()
    body: MealUpdateInput
  ): Promise<User[]> {
        return this.service.NutritionalInformation(body);
      }

  @common.Patch("/meals/set-expiry-date")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SetExpiryDate(
    @common.Body()
    body: MealUpdateInput
  ): Promise<User> {
        return this.service.SetExpiryDate(body);
      }

  @common.Patch("/meals/update-availability")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateAvailability(
    @common.Body()
    body: MealUpdateInput
  ): Promise<User> {
        return this.service.UpdateAvailability(body);
      }
}
