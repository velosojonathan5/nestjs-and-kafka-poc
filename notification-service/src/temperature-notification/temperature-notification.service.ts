import { Injectable } from "@nestjs/common";
import { CreateTemperatureNotificationDto } from "./dto/create-temperature-notification.dto";

@Injectable()
export class TemperatureNotificationService {
  private lastTemp = 0;

  getTemp() {
    return this.lastTemp;
  }

  create(createTemperatureNotificationDto: CreateTemperatureNotificationDto) {
    const {
      value: { temperature },
    } = createTemperatureNotificationDto;

    console.log("temperature: ", temperature);

    this.lastTemp = temperature;
  }
}
