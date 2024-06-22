import { Injectable } from "@nestjs/common";

@Injectable()
export class LoginService {
  constructor() {}
  async AuthenticateUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
