import { Injectable, Logger } from '@nestjs/common';
import { Profile } from '../schemas/Profile';
import Address from '../interfaces/Address';
import { CreateProfileDto, UpdateProfileDto } from '../dto/profile';

@Injectable()
export class ProfileService {
  private readonly logger = new Logger(ProfileService.name);
  find(): Partial<Profile> {
    return {
      username: 'test',
      address: {
        street: 'Teststreet',
        subaddress: '',
        houseNumber: 14,
        country: 'Netherlands',
        postalCode: '1234AB',
      } as Address,
      avatar: '',
    };
  }

  register(dto: CreateProfileDto): boolean {
    this.logger.log('Called Profile.create()');
    throw new Error('Database level specific error?');
    // return true;
  }

  update(id: string, dto: UpdateProfileDto): boolean {
    throw new Error('Not implemented error');
  }

  delete(id: string): boolean {
    throw new Error('Not implemented error');
  }

}
