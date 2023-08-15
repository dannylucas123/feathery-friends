import { Module } from '@nestjs/common';
import { ProfileController } from './controllers/profile';
import { ProfileService } from './services/profile';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}
