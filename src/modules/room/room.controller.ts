import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';

import { RoomService } from './room.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private roomService: RoomService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createNewRoom(
    @Body() createRoomDto: CreateRoomDto,
  ): Promise<Room> {
    return await this.roomService.createNewRoom(createRoomDto)
  }

  @Get()
  async getRooms(): Promise<Room[]> {
    return await this.roomService.getAllRooms();
  }
}
