import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get<string>('SQLITE_DATABASE_NAME'),
        autoLoadEntities: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class SQLiteModule {}
