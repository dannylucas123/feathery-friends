import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from 'apps/feathery-friends-snap/src/enums/role.enum';
import { RegisterUserDto } from '../dto/auth.request.dto';
import { LoginUserResponseDto } from '../dto/auth.response.dto';
import { User } from '../entities/User';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(registerUserDto: RegisterUserDto): Promise<User> {
    try {
      const result = await this.userRepository.insert({
        username: registerUserDto.username,
        password: registerUserDto.password,
      });
      return result.raw;
    } catch (err) {
      this.logger.error(`Failed to insert for ${registerUserDto}`, err);
      throw new Error(`Failed to insert for ${registerUserDto}`);
    }
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
