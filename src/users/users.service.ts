import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findOneByToken(token: string): Promise<any> {
    // Validate if token passed along with HTTP request
    // is associated with any registered account in the database
    return false;
  }
}
