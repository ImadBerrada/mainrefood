import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserManagementService } from "./usermanagement.service";
import { UserCreateInput } from "../user/base/UserCreateInput";
import { User } from "../user/base/User";

@swagger.ApiTags("userManagements")
@common.Controller("userManagements")
export class UserManagementController {
  constructor(protected readonly service: UserManagementService) {}

  @common.Post("/follow-restaurant")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FollowRestaurant(
    @common.Body()
    body: UserCreateInput
  ): Promise<User> {
        return this.service.FollowRestaurant(body);
      }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: UserCreateInput
  ): Promise<string> {
        return this.service.Login(body);
      }

  @common.Get("/order-history")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async OrderHistory(
    @common.Body()
    body: UserCreateInput
  ): Promise<User[]> {
        return this.service.OrderHistory(body);
      }

  @common.Post("/referral-program")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ReferralProgram(
    @common.Body()
    body: UserCreateInput
  ): Promise<User> {
        return this.service.ReferralProgram(body);
      }

  @common.Post("/register")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Register(
    @common.Body()
    body: UserCreateInput
  ): Promise<User> {
        return this.service.Register(body);
      }

  @common.Post("/social-media-integration")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SocialMediaIntegration(
    @common.Body()
    body: UserCreateInput
  ): Promise<User> {
        return this.service.SocialMediaIntegration(body);
      }

  @common.Patch("/profile")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateProfile(
    @common.Body()
    body: UserCreateInput
  ): Promise<User> {
        return this.service.UpdateProfile(body);
      }

  @common.Patch("/preferences")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UserPreferences(
    @common.Body()
    body: UserCreateInput
  ): Promise<User> {
        return this.service.UserPreferences(body);
      }
}
