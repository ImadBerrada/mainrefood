import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { SettingsCustomizationService } from "./settingscustomization.service";

@swagger.ApiTags("settingsCustomizations")
@common.Controller("settingsCustomizations")
export class SettingsCustomizationController {
  constructor(protected readonly service: SettingsCustomizationService) {}
}
