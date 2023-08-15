import { Injectable } from '@nestjs/common';

@Injectable()
export class FeatheryFriendSnapService {
  getHello(): string {
    return 'Hello World!';
  }
}
