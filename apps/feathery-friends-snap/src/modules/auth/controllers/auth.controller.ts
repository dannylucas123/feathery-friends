import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from '../dto/auth.request.dto';
import { AuthService } from '../services/auth.service';
import { LoginUserResponseDto } from '../dto/auth.response.dto';
import { NoAuth } from 'apps/feathery-friends-snap/src/decorators/noauth.decorator';
import { User } from '@app/common/entities/User';

@Controller('auth')
@NoAuth()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() registerDto: RegisterUserDto): Promise<User> {
    try {
      return this.authService.register(registerDto);
    } catch (err) {
      throw new HttpException(
        'An unknown error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('login')
  async login(@Body() loginDto: LoginUserDto): Promise<LoginUserResponseDto> {
    return this.authService.login(loginDto.username);
  }
}
