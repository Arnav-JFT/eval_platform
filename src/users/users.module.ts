import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.services';
import { UsersController } from './users.controller';
import { User } from './users.entity';
import { AbilityModule } from '../ability/ability.module';

@Module({
  imports: [AbilityModule, TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
