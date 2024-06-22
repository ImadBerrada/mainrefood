import * as graphql from "@nestjs/graphql";
import { IntegrationService } from "./integration.service";

export class IntegrationResolver {
  constructor(protected readonly service: IntegrationService) {}
}
