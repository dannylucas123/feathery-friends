import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { FeatheryFriendSnapModule } from './feathery-friends-snap.module';
// import { connect, storeFileV1 } from './ftp/connection';

async function bootstrap() {
  const app = await NestFactory.create(FeatheryFriendSnapModule, {
    logger: ['error', 'warn'],
  });
  // await connect();
  // await storeFileV1('C:/Users/Danny/Documents/test.txt', `test.txt`);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3050, () => {
    console.log('Listening to port:', 3050);
  });
}

bootstrap();
