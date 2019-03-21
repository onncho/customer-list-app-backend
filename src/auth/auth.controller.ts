import { Controller, Get, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  test(@Res() res) {
    return res.status(HttpStatus.OK).json('***AUTH CONTROLERR***');
  }

  @Get('token')
  async createToken(): Promise<any> {
    return await this.authService.createToken();
  }

  @Get('data')
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    // this route is restricted by AuthGuard
    // JWT strategy
  }
}
