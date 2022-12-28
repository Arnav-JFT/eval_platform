import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { AbilityFactory, Action } from 'src/ability/ability.factory';
import { User } from 'src/users/users.entity';

@Controller('/questions')
export class QuestionsController {
  constructor(
    private readonly questionServices: QuestionsService,
    private abilityFactory: AbilityFactory,
  ) {}

  @Get()
  findAll(@Body() user) {
    const ability = this.abilityFactory.defineAbility(user);
    const isAllowed = ability.can(Action.Create, User);
    if (!isAllowed) {
      throw new ForbiddenException('you are not a admin');
    }
    return this.questionServices.findAll();
  }
  @Post()
  create(
    @Body('question') question: string,
    @Body('ans') ans: string,
    @Body('timer') timer: number,
  ) {
    return this.questionServices.createQuestion(question, ans, timer);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.questionServices.deleteQuestion(id);
  }
}
