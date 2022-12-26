import { Injectable } from '@nestjs/common';
import { questions } from './questions.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectRepository(questions)
    private quesRepository: Repository<questions>,
  ) {}

  findAll(): Promise<questions[]> {
    return this.quesRepository.find();
  }
}
