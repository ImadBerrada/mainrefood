import * as graphql from "@nestjs/graphql";
import { DashboardService } from "./dashboard.service";

export class DashboardResolver {
  constructor(protected readonly service: DashboardService) {}

  @graphql.Query(() => String)
  async FetchDashboardData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchDashboardData(args);
  }
}
