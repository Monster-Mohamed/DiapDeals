import { Controller, Get } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { Merchant } from './entities/merchant.entity';

@Controller('merchants')
export class MerchantController {
  constructor(private readonly merchantService: MerchantService) {}

  @Get()
  findAll(): Promise<Merchant[]> {
    return this.merchantService.findAll();
  }
}
