import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'apps/feathery-friends-snap/src/enums/role.enum';
import { RegisterUserDto } from '../dto/auth.request.dto';
import { LoginUserResponseDto } from '../dto/auth.response.dto';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  register(registerUserDto: RegisterUserDto): boolean {
    console.log(registerUserDto);
    return true;
  }

  async login(username: string): Promise<LoginUserResponseDto> {
    return {
      jwt: await this.jwtService.signAsync({
        username,
        roles: [Role.Admin, Role.User],
      }),
    };
  }
}
