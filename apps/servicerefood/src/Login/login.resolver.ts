import * as graphql from "@nestjs/graphql";
import { LoginService } from "./login.service";

export class LoginResolver {
  constructor(protected readonly service: LoginService) {}

  @graphql.Query(() => String)
  async AuthenticateUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AuthenticateUser(args);
  }
}
