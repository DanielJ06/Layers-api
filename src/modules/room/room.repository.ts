import { EntityRepository, Repository } from "typeorm";
import { Room } from "./room.entity";
import { CreateRoomDto } from "./dto/create-room.dto";

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {
  async getRooms(): Promise<Room[]> {
    return await this.find({});
  }

  async createRoom(
    createRoomDto: CreateRoomDto,
  ): Promise<Room> {
    return await this.save(createRoomDto);
  }
}