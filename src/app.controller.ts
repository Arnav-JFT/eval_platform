import { Controller, Get, UseGuards, Req, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('auth/google/callback')
  @UseGuards(AuthGuard('google'))
  @Render('index')
  root() {
    return { message: 'Hello' };
  }
  // @Get('/register')
  // @Render('register')
  // register() {
  //   return { message: 'Hello world!' };
  // }

  // @Get('/login')
  // @Render('login')
  // login() {
  //   return { message: 'Hello world!' };
  // }
}
