import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { SQLiteModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { FeatheryFriendSnapController } from './feathery-friends-snap.controller';
import { FeatheryFriendSnapService } from './feathery-friends-snap.service';
import { ProfileModule } from './modules/profiles/profile.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesGuard } from './guards/roles.guard';
import { JwtGuard } from './guards/jwt.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    SQLiteModule,
    ProfileModule,
    AuthModule,
  ],
  controllers: [FeatheryFriendSnapController],
  providers: [
    FeatheryFriendSnapService,
    {
      provide: APP_GUARD,
      useClass: JwtGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class FeatheryFriendSnapModule {}
