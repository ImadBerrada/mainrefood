import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CustomerSupportService } from "./customersupport.service";

@swagger.ApiTags("customerSupports")
@common.Controller("customerSupports")
export class CustomerSupportController {
  constructor(protected readonly service: CustomerSupportService) {}
}
