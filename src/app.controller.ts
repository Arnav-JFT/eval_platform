import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/register')
  @Render('register')
  register() {
    return { message: 'Hello world!' };
  }

  @Get('/login')
  @Render('login')
  login() {
    return { message: 'Hello world!' };
  }
}
