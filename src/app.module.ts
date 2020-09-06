import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppGateway } from './app.gateway';
import { typeOrmCongif } from './config/typeorm.config';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmCongif),
    RoomModule
  ],
  providers: [AppGateway],
})
export class AppModule {}
