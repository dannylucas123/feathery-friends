import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatheryFriendsVotesService {
  getHello(): string {
    return 'Hello World!';
  }
}
