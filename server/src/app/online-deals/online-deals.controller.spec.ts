import { Test, TestingModule } from '@nestjs/testing';
import { OnlineDealsController } from './online-deals.controller';
import { OnlineDealsService } from './online-deals.service';

describe('OnlineDealsController', () => {
  let controller: OnlineDealsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OnlineDealsController],
      providers: [OnlineDealsService],
    }).compile();

    controller = module.get<OnlineDealsController>(OnlineDealsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
