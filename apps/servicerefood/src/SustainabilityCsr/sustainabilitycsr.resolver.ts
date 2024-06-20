import * as graphql from "@nestjs/graphql";
import { SustainabilityCsrService } from "./sustainabilitycsr.service";

export class SustainabilityCsrResolver {
  constructor(protected readonly service: SustainabilityCsrService) {}
}
