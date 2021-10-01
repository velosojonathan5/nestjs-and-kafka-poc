import { Controller, Get } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { CreateTemperatureNotificationDto } from "./dto/create-temperature-notification.dto";
import { TemperatureNotificationService } from "./temperature-notification.service";

@Controller("temperature")
export class TemperatureNotificationController {
  constructor(
    private readonly temperatureNotificationService: TemperatureNotificationService
  ) {}

  @Get()
  getTemp() {
    return this.temperatureNotificationService.getTemp();
  }

  @MessagePattern("temperatureMeasurement")
  create(
    @Payload()
    createTemperatureNotificationDto: CreateTemperatureNotificationDto
  ) {
    return this.temperatureNotificationService.create(
      createTemperatureNotificationDto
    );
  }
}
