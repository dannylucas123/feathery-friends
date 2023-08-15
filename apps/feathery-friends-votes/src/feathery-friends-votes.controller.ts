import { Controller, Get } from '@nestjs/common';
import { FeatheryFriendsVotesService } from './feathery-friends-votes.service';

@Controller()
export class FeatheryFriendsVotesController {
  constructor(private readonly featheryFriendsVotesService: FeatheryFriendsVotesService) {}

  @Get()
  getHello(): string {
    return this.featheryFriendsVotesService.getHello();
  }
}
