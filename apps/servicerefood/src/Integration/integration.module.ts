import { Module } from "@nestjs/common";
import { IntegrationService } from "./integration.service";
import { IntegrationController } from "./integration.controller";
import { IntegrationResolver } from "./integration.resolver";

@Module({
  controllers: [IntegrationController],
  providers: [IntegrationService, IntegrationResolver],
  exports: [IntegrationService],
})
export class IntegrationModule {}
