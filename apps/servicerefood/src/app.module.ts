import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { MealModule } from "./meal/meal.module";
import { OrderModule } from "./order/order.module";
import { CustomerSupportModule } from "./CustomerSupport/customersupport.module";
import { DashboardModule } from "./Dashboard/dashboard.module";
import { IntegrationModule } from "./Integration/integration.module";
import { LoginModule } from "./Login/login.module";
import { MealManagementModule } from "./MealManagement/mealmanagement.module";
import { NotificationModule } from "./Notification/notification.module";
import { OrderManagementModule } from "./OrderManagement/ordermanagement.module";
import { PaymentModule } from "./Payment/payment.module";
import { ProfileModule } from "./Profile/profile.module";
import { RestaurantManagementModule } from "./RestaurantManagement/restaurantmanagement.module";
import { ReviewRatingModule } from "./ReviewRating/reviewrating.module";
import { SettingsCustomizationModule } from "./SettingsCustomization/settingscustomization.module";
import { SustainabilityCsrModule } from "./SustainabilityCsr/sustainabilitycsr.module";
import { UserManagementModule } from "./UserManagement/usermanagement.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    RestaurantModule,
    MealModule,
    OrderModule,
    CustomerSupportModule,
    DashboardModule,
    IntegrationModule,
    LoginModule,
    MealManagementModule,
    NotificationModule,
    OrderManagementModule,
    PaymentModule,
    ProfileModule,
    RestaurantManagementModule,
    ReviewRatingModule,
    SettingsCustomizationModule,
    SustainabilityCsrModule,
    UserManagementModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
