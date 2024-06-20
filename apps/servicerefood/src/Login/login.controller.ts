import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { LoginService } from "./login.service";

@swagger.ApiTags("logins")
@common.Controller("logins")
export class LoginController {
  constructor(protected readonly service: LoginService) {}

  @common.Get("/:id/authenticate-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AuthenticateUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AuthenticateUser(body);
      }
}
