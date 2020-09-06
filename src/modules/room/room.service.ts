import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomRepository } from './room.repository';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './room.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(RoomRepository)
    private roomRepository: RoomRepository
  ) {}

  async getAllRooms(): Promise<Room[]> {
    return await this.roomRepository.getRooms();
  }

  async createNewRoom(
    createRoomDto: CreateRoomDto
  ): Promise<Room> {
    return await this.roomRepository.createRoom(createRoomDto);
  }
}
