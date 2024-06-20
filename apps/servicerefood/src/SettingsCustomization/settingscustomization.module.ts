import { Module } from "@nestjs/common";
import { SettingsCustomizationService } from "./settingscustomization.service";
import { SettingsCustomizationController } from "./settingscustomization.controller";
import { SettingsCustomizationResolver } from "./settingscustomization.resolver";

@Module({
  controllers: [SettingsCustomizationController],
  providers: [SettingsCustomizationService, SettingsCustomizationResolver],
  exports: [SettingsCustomizationService],
})
export class SettingsCustomizationModule {}
