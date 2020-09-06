import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { RoomRepository } from './room.repository';
import { RoomService } from './room.service';
import { RoomController } from './room.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([RoomRepository])
  ],
  providers: [RoomService],
  controllers: [RoomController]
})
export class RoomModule {}
