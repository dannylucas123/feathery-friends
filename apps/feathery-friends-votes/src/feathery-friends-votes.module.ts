import { Module } from '@nestjs/common';
import { FeatheryFriendsVotesController } from './feathery-friends-votes.controller';
import { FeatheryFriendsVotesService } from './feathery-friends-votes.service';

@Module({
  imports: [],
  controllers: [FeatheryFriendsVotesController],
  providers: [FeatheryFriendsVotesService],
})
export class FeatheryFriendsVotesModule {}
