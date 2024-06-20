import { Module } from "@nestjs/common";
import { MealManagementService } from "./mealmanagement.service";
import { MealManagementController } from "./mealmanagement.controller";
import { MealManagementResolver } from "./mealmanagement.resolver";

@Module({
  controllers: [MealManagementController],
  providers: [MealManagementService, MealManagementResolver],
  exports: [MealManagementService],
})
export class MealManagementModule {}
