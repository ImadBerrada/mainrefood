import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfileService {
  constructor() {}
  async FetchProfileData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async UpdateProfileData(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
