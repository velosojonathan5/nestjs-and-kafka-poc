import { Module } from "@nestjs/common";
import { ClientKafka, ClientsModule, Transport } from "@nestjs/microservices";
import { ScheduleModule } from "@nestjs/schedule";
import { AppService } from "./app.service";

@Module({
  imports: [
    ScheduleModule.forRoot(),
    ClientsModule.register([
      {
        name: "KAFKA_SERVICE",
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: "hero",
            brokers: ["localhost:9094"],
          },
          consumer: {
            groupId: "nest-group1",
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [
    AppService,
    {
      provide: "KAFKA_PRODUCER",
      useFactory: async (kafkaClient: ClientKafka) => {
        return kafkaClient.connect();
      },
      inject: ["KAFKA_SERVICE"],
    },
  ],
})
export class AppModule {}
