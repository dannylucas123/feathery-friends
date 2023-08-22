import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import migrations from 'apps/feathery-friends-snap/src/migrations/_migrations';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        database: configService.get<string>('MYSQLDB_DATABASE'),
        password: configService.get<string>('MYSQLDB_PASSWORD'),
        username: configService.get<string>('MYSQLDB_USER'),
        migrationsTableName: 'migrations_sql',
        autoLoadEntities: true,
        migrationsRun: true,
        // Not a good way of doing this when creating modules
        migrations,
        logging: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
export class MySQLModule {}
