import { Injectable } from '@nestjs/common';
import { UsersService } from './users/users.services';

@Injectable()
export class AppService {
  // constructor(private readonly userService: UsersService) {}
  googleLogIn(req) {
    if (!req.user) {
      return 'No user from google';
    }
    //   if (req.user.email === this.userService.findbyemail(req.user.email)) {
    //   }
    // }
  }
}
