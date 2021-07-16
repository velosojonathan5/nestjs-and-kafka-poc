import { Module } from "@nestjs/common";
import { TemperatureNotificationService } from "./temperature-notification.service";
import { TemperatureNotificationController } from "./temperature-notification.controller";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  controllers: [TemperatureNotificationController],
  providers: [TemperatureNotificationService],
  imports: [
    ClientsModule.register([
      {
        name: "KAFKA_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ["localhost:9094"],
          },
          consumer: {
            groupId: "notification-consumer",
          },
        },
      },
    ]),
  ],
})
export class TemperatureNotificationModule {}
