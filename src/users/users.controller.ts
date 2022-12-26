import { Controller, Get } from '@nestjs/common';
import { User } from './users.entity';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}
