import { Inject, Injectable } from "@nestjs/common";
import { Producer } from "@nestjs/microservices/external/kafka.interface";
import { Cron, CronExpression } from "@nestjs/schedule";

@Injectable()
export class AppService {
  constructor(@Inject("KAFKA_PRODUCER") private kafkaProducer: Producer) {}

  @Cron(CronExpression.EVERY_5_SECONDS)
  async generateTemperature() {
    const temperature = Math.floor(Math.random() * (30 - 20) + 20);

    const data = { temperature };

    console.log(data);

    await this.kafkaProducer.send({
      topic: "temperatureMeasurement",
      messages: [
        {
          key: "temperature",
          value: JSON.stringify(data),
        },
      ],
    });
  }
}
