import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ProfileService } from "./profile.service";

@swagger.ApiTags("profiles")
@common.Controller("profiles")
export class ProfileController {
  constructor(protected readonly service: ProfileService) {}

  @common.Get("/:id/fetch-profile-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async FetchProfileData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.FetchProfileData(body);
      }

  @common.Get("/:id/update-profile-data")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateProfileData(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.UpdateProfileData(body);
      }
}
