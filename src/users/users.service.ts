import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOneByEmail(email) {
    console.log('UserService', email);
    return true;
  }
}
