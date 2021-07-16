import { Injectable } from "@nestjs/common";
import { CreateTemperatureNotificationDto } from "./dto/create-temperature-notification.dto";

@Injectable()
export class TemperatureNotificationService {
  create(createTemperatureNotificationDto: CreateTemperatureNotificationDto) {
    const {
      value: { temperature },
    } = createTemperatureNotificationDto;

    console.log("temperature: ", temperature);
  }
}
