import * as graphql from "@nestjs/graphql";
import { CustomerSupportService } from "./customersupport.service";

export class CustomerSupportResolver {
  constructor(protected readonly service: CustomerSupportService) {}
}
