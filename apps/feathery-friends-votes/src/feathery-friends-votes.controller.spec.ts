import { Test, TestingModule } from '@nestjs/testing';
import { FeatheryFriendsVotesController } from './feathery-friends-votes.controller';
import { FeatheryFriendsVotesService } from './feathery-friends-votes.service';

describe('FeatheryFriendsVotesController', () => {
  let featheryFriendsVotesController: FeatheryFriendsVotesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FeatheryFriendsVotesController],
      providers: [FeatheryFriendsVotesService],
    }).compile();

    featheryFriendsVotesController = app.get<FeatheryFriendsVotesController>(FeatheryFriendsVotesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(featheryFriendsVotesController.getHello()).toBe('Hello World!');
    });
  });
});
