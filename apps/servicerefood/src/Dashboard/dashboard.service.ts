import { Injectable } from "@nestjs/common";

@Injectable()
export class DashboardService {
  constructor() {}
  async FetchDashboardData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
