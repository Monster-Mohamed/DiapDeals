import { Module } from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { OnlineDealsController } from './online-deals.controller';

@Module({
  controllers: [OnlineDealsController],
  providers: [OnlineDealsService]
})
export class OnlineDealsModule {}
