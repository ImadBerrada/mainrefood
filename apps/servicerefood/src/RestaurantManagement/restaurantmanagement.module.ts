import { Module } from "@nestjs/common";
import { RestaurantManagementService } from "./restaurantmanagement.service";
import { RestaurantManagementController } from "./restaurantmanagement.controller";
import { RestaurantManagementResolver } from "./restaurantmanagement.resolver";

@Module({
  controllers: [RestaurantManagementController],
  providers: [RestaurantManagementService, RestaurantManagementResolver],
  exports: [RestaurantManagementService],
})
export class RestaurantManagementModule {}
