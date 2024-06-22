import { Module } from "@nestjs/common";
import { CustomerSupportService } from "./customersupport.service";
import { CustomerSupportController } from "./customersupport.controller";
import { CustomerSupportResolver } from "./customersupport.resolver";

@Module({
  controllers: [CustomerSupportController],
  providers: [CustomerSupportService, CustomerSupportResolver],
  exports: [CustomerSupportService],
})
export class CustomerSupportModule {}
