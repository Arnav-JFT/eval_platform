import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  Post,
  Render,
} from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
import { AbilityFactory, Action } from 'src/ability/ability.factory';
// import { rootCertificates } from 'tls';
import { User } from './users.entity';
import { UsersService } from './users.services';

@Controller('users')
export class UsersController {
  constructor(
    private readonly userService: UsersService,
    private abilityFactory: AbilityFactory,
  ) {}

  @Get()
  findAll(@Body() user) {
    const ability = this.abilityFactory.defineAbility(user);
    const isAllowed = ability.can(Action.Create, User);
    if (!isAllowed) {
      console.log('aaa');
      //@Render('index');
    } else {
      Render('register');
    }
    return user;
  }

  @Post()
  create(@Body() user) {
    const ability = this.abilityFactory.defineAbility(user);
    const isAllowed = ability.can(Action.Create, User);
    if (!isAllowed) {
      throw new ForbiddenException('you are not a admin');
    }
    return user;
  }

  // @Delete(':id')
  // remove(@Param('id') id: number) {
  //   const ability = this.abilityFactory.defineAbility(User);
  //   const isAllowed = ability.can(Action.Create, User);
  //   if (!isAllowed) {
  //     throw new ForbiddenException('you are not a admin');
  //   }
  //   return { message: 'userdeleted' };
  // }
}
