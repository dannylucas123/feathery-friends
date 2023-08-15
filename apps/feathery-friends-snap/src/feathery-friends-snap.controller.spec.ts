import { Test, TestingModule } from '@nestjs/testing';
import { FeatheryFriendSnapController } from './feathery-friends-snap.controller';
import { FeatheryFriendSnapService } from './feathery-friends-snap.service';

describe('FeatheryFriendSnapController', () => {
  let featheryFriendSnapController: FeatheryFriendSnapController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeatheryFriendSnapController],
      providers: [FeatheryFriendSnapService],
    }).compile();

    featheryFriendSnapController = app.get<FeatheryFriendSnapController>(
      FeatheryFriendSnapController,
    );
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(featheryFriendSnapController.getHello()).toBe('Hello World!');
    });
  });
});
