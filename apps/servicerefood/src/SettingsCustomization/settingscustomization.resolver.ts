import * as graphql from "@nestjs/graphql";
import { SettingsCustomizationService } from "./settingscustomization.service";

export class SettingsCustomizationResolver {
  constructor(protected readonly service: SettingsCustomizationService) {}
}
