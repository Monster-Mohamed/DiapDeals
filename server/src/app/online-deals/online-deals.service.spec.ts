import { Test, TestingModule } from '@nestjs/testing';
import { OnlineDealsService } from './online-deals.service';

describe('OnlineDealsService', () => {
  let service: OnlineDealsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OnlineDealsService],
    }).compile();

    service = module.get<OnlineDealsService>(OnlineDealsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
