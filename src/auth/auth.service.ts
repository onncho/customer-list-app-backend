import { UsersService } from './../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}

  async signIn(): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: JwtPayload = { email: 'user@email.com' };
    return this.jwtService.sign(user);
  }

  async createToken() {
    const user: JwtPayload = { email: 'test@email.com' };
    const accessToken = this.jwtService.sign(user);
    return {
      expiresIn: 3600,
      accessToken,
    };
  }

  // async validateUser(payload: JwtPayload): Promise<any> {
  //   // put some validation logic here
  //   // for example query user by id/email/username
  //   return {};
  // }
  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findOneByEmail(payload.email);
  }
}

// import { JwtService } from '@nestjs/jwt';
// import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import { JwtPayload } from './interfaces/jwt-payload.interface';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly usersService: UsersService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async signIn(): Promise<string> {
//     // In the real-world app you shouldn't expose this method publicly
//     // instead, return a token once you verify user credentials
//     const user: JwtPayload = { email: 'user@email.com' };
//     return this.jwtService.sign(user);
//   }

//   async validateUser(payload: JwtPayload): Promise<any> {
//     return await this.usersService.findOneByEmail(payload.email);
//   }
// }
