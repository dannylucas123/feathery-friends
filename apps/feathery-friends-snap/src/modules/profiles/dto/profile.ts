import { IsNotEmpty } from 'class-validator';
import { OmitType } from '@nestjs/mapped-types';
import Address from '../interfaces/Address';

export class CreateProfileDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;

  address: Address;
  avatar: string;
}

export class UpdateProfileDto extends OmitType(CreateProfileDto, [
  'password',
] as const) {}
