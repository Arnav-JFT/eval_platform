import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      clientID:
        '630233020221-2cop93i86k9da1fegq4go2pk8m5ht1df.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:9000/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
  }
}
