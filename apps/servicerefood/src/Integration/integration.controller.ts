import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { IntegrationService } from "./integration.service";

@swagger.ApiTags("integrations")
@common.Controller("integrations")
export class IntegrationController {
  constructor(protected readonly service: IntegrationService) {}
}
