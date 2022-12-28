import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GoogleStrategy } from './google.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { QuestionsModule } from './questions/questions.module';
import { questions } from './questions/questions.entity';
import { AbilityModule } from './ability/ability.module';
import { UsersService } from './users/users.services';

@Module({
  imports: [
    UsersModule,
    QuestionsModule,
    AbilityModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'code',
      password: 'OfwVH7VbQrO(rG3O',
      database: 'code',
      entities: [User, questions],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, GoogleStrategy],
})
export class AppModule {}
