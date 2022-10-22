import { Module } from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { OnlineDealsController } from './online-deals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OnlineDeal } from './entities/online-deal.entity';
import { PointService } from '../point/point.service';
import { PointEntity } from '../point/point.entity';
import { MerchantService } from '../merchant/merchant.service';
import { Merchant } from '../merchant/entities/merchant.entity';
import { ImageService } from '../image/image.service';
import { Image } from '../image/entities/image.entity';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/entities/category.entity';
import { UserEntity } from '../user/user.entity';
import { UserHelperService } from '../user/user-helper/user-helper.service';
import { EmailService } from '../global/services/email.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      OnlineDeal,
      PointEntity,
      Merchant,
      Image,
      Category,
      UserEntity,
    ]),
  ], // Entities
  controllers: [OnlineDealsController],
  providers: [
    OnlineDealsService,
    PointService,
    MerchantService,
    ImageService,
    CategoryService,
    UserHelperService,
    EmailService,
  ],
})
export class OnlineDealsModule {}
