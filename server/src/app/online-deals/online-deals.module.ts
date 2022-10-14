import { Module } from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { OnlineDealsController } from './online-deals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnlineDeal } from './entities/online-deal.entity';
import { PointService } from '../point/point.service';
import { PointEntity } from '../point/point.entity';
import { Merchant } from '../merchant/entities/merchant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OnlineDeal, Merchant, PointEntity])], // Entities
  controllers: [OnlineDealsController],
  providers: [OnlineDealsService, PointService],
})
export class OnlineDealsModule {}
