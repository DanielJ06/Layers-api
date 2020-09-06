import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmCongif: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'daniel06',
  database: 'layers',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
}