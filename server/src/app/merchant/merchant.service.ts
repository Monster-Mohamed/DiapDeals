import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from './entities/merchant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant)
    private readonly Merchant: Repository<Merchant>
  ) {}

  async findAll(): Promise<Merchant[]> {
    return await this.Merchant.find();
  }
}
