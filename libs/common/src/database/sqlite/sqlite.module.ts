import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import migrations from 'apps/feathery-friends-snap/src/migrations/_migrations';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'sqlite',
        database: configService.get<string>('SQLITE_DATABASE_PATH'),
        autoLoadEntities: true,
        migrationsTableName: 'migrations_sqlite',
        migrationsRun: true,
        // Not a good way of doing this when creating modules
        migrations,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class SQLiteModule {}
