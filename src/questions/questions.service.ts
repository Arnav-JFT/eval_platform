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
  createQuestion(question, ans, timer) {
    const obj = {
      question,
      ans,
      timer,
    };
    return this.quesRepository.save(obj);
  }
  deleteQuestion(id: number) {
    this.quesRepository.delete(id);
  }

  findOne(id: number) {
    return this.quesRepository.findOneBy({ id });
  }
}
