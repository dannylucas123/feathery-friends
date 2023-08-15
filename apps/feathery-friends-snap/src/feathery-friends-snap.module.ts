import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
// import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { FeatheryFriendSnapController } from './feathery-friends-snap.controller';
import { FeatheryFriendSnapService } from './feathery-friends-snap.service';
import { ProfileModule } from './modules/profiles/profile.module';
import { AuthModule } from './modules/auth/auth.module';
import { RolesGuard } from './guards/roles.guard';
import { JwtGuard } from './guards/jwt.guard';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, expandVariables: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'snap',
      autoLoadEntities: true,
    }),
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
