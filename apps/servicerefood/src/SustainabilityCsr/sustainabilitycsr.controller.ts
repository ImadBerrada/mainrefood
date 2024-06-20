import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SustainabilityCsrService } from "./sustainabilitycsr.service";

@swagger.ApiTags("sustainabilityCsrs")
@common.Controller("sustainabilityCsrs")
export class SustainabilityCsrController {
  constructor(protected readonly service: SustainabilityCsrService) {}
}
