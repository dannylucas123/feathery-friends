import { Controller, Get } from '@nestjs/common';
import { FeatheryFriendSnapService } from './feathery-friends-snap.service';

@Controller()
export class FeatheryFriendSnapController {
  constructor(
    private readonly featheryFriendSnapService: FeatheryFriendSnapService,
  ) {}

  @Get()
  getHello(): string {
    return this.featheryFriendSnapService.getHello();
  }
}
