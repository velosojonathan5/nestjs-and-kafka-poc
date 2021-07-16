import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TemperatureNotificationModule } from './temperature-notification/temperature-notification.module';

@Module({
  imports: [TemperatureNotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
