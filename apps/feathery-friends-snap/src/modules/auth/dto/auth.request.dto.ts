import { PickType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}

export class LoginUserDto extends PickType(RegisterUserDto, [
  'username',
  'password',
] as const) {}
