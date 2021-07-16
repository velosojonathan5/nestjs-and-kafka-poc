import { NestFactory } from "@nestjs/core";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ["localhost:9094"],
      },
      consumer: {
        groupId: "notification",
      },
    },
  });

  await app.startAllMicroservices();

  await app.listen(3000);
}
bootstrap();
