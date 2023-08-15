import {
  Controller,
  Get,
  Body,
  HttpException,
  HttpStatus,
  Logger,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { Profile } from '../schemas/Profile';
import { ProfileService } from '../services/profile';
import { UpdateProfileDto } from '../dto/profile';
import { Role } from 'src/enums/role.enum';

@Controller('profiles')
export class ProfileController {
  private readonly logger = new Logger(ProfileController.name);
  constructor(private profileService: ProfileService) {}

  @Get()
  @Roles(Role.User)
  async find(): Promise<Partial<Profile>> {
    return this.profileService.find();
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ): Promise<boolean> {
    try {
      return this.profileService.update(id, updateProfileDto);
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        'An unknown error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  @Roles(Role.Admin)
  async delete(@Param('id') id: string): Promise<boolean> {
    try {
      return this.profileService.delete(id);
    } catch (err) {
      this.logger.error(err);
      throw new HttpException(
        'An unknown error occurred',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
