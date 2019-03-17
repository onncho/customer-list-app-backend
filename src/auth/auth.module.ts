import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';
import { UsersModule } from '../users/users.module';
import { UsersService } from './../users/users.service';
import { PassportModule } from '@nestjs/passport';

// PassportModule.register({ session: true })

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'bearer' }),
    UsersModule,
  ],
  providers: [AuthService, HttpStrategy, UsersService],
})
export class AuthModule {}
