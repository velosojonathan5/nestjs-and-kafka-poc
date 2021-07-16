import { PartialType } from '@nestjs/mapped-types';
import { CreateTemperatureNotificationDto } from './create-temperature-notification.dto';

export class UpdateTemperatureNotificationDto extends PartialType(CreateTemperatureNotificationDto) {
  id: number;
}
