import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppGateway } from './app.gateway';
import { typeOrmCongif } from './config/typeorm.config';
import { RoomModule } from './modules/room/room.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmCongif),
    RoomModule,
    AuthModule
  ],
  providers: [AppGateway],
})
export class AppModule {}
