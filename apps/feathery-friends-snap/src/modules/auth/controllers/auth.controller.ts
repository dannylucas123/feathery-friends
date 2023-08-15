import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from '../dto/auth.request.dto';
import { AuthService } from '../services/auth.service';
import { LoginUserResponseDto } from '../dto/auth.response.dto';
import { NoAuth } from 'src/decorators/noauth.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @NoAuth()
  @Post('register')
  async register(@Body() registerDto: RegisterUserDto): Promise<boolean> {
    return this.authService.register(registerDto);
  }

  @NoAuth()
  @Post('login')
  async login(@Body() loginDto: LoginUserDto): Promise<LoginUserResponseDto> {
    return this.authService.login(loginDto.username);
  }
}
