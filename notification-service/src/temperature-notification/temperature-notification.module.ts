import { Module } from "@nestjs/common";
import { TemperatureNotificationService } from "./temperature-notification.service";
import { TemperatureNotificationController } from "./temperature-notification.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  controllers: [TemperatureNotificationController],
  providers: [TemperatureNotificationService],
  imports: [],
})
export class TemperatureNotificationModule {}
