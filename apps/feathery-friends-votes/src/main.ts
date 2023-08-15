import { NestFactory } from '@nestjs/core';
import { FeatheryFriendsVotesModule } from './feathery-friends-votes.module';

async function bootstrap() {
  const app = await NestFactory.create(FeatheryFriendsVotesModule);
  await app.listen(3000);
}
bootstrap();
