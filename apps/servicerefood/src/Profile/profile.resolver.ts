import * as graphql from "@nestjs/graphql";
import { ProfileService } from "./profile.service";

export class ProfileResolver {
  constructor(protected readonly service: ProfileService) {}

  @graphql.Query(() => String)
  async FetchProfileData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.FetchProfileData(args);
  }

  @graphql.Query(() => String)
  async UpdateProfileData(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.UpdateProfileData(args);
  }
}
