import { Controller, Get } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('/questions')
export class QuestionsController {
  constructor(private readonly questionServices: QuestionsService) {}

  @Get()
  find() {
    //console.log('sdhfifjwefjweiofjweoifjweiofjweiofjweiofjweio');
    return { message: 'hello' };
  }

  @Get('u')
  findAll() {
    //console.log('sdhfifjwefjweiofjweoifjweiofjweiofjweiofjweio');
    return this.questionServices.findAll();
  }
}
