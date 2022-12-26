import { PassportStrategy } from "@nestjs/passport";
import {Strategy,VerifyCallback} from 'passport-google-oauth20';
import { Injectable } from "@nestjs/common";
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy,'google'){
    constructor(){
        super({
            clientID:'167117177675-vhcs19f1hghs9h7umaqkjp8lktep513t.apps.googleusercontent.com',
            clientSecret:'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',
            callbackURL:'http://localhost:3000/auth/google/callback',
            scope:['email','profile']
        });
    }
    async validate(accessToken:string,refreshToken:string,profile:any,done:VerifyCallback):Promise<any>{
        const {name,emails,photos}=profile;
        const user={
            email:emails[0].value,
            firstName:name.givenName,
            lastName:name.familyName,
            picture:photos[0].value,
            accessToken
        }       
        done(null,user);
    }
}