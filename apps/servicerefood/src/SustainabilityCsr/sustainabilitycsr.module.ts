import { Module } from "@nestjs/common";
import { SustainabilityCsrService } from "./sustainabilitycsr.service";
import { SustainabilityCsrController } from "./sustainabilitycsr.controller";
import { SustainabilityCsrResolver } from "./sustainabilitycsr.resolver";

@Module({
  controllers: [SustainabilityCsrController],
  providers: [SustainabilityCsrService, SustainabilityCsrResolver],
  exports: [SustainabilityCsrService],
})
export class SustainabilityCsrModule {}
