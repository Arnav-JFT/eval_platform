import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { questions } from './questions.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([questions])],
  providers: [QuestionsService],
  controllers: [QuestionsController],
})
export class QuestionsModule {}
