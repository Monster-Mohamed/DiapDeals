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

  async create(merchant: string): Promise<void> {
    const checkMerchant = await this.Merchant.findOneBy({
      name: merchant,
    });
    if (!checkMerchant) {
      // TODO: create a new merchant
      const newMerchant = this.Merchant.create({
        name: merchant,
      });

      //TODO: Save the merchant to the database
      await this.Merchant.save(newMerchant);
    }
  }

  async findAll(): Promise<Merchant[]> {
    return await this.Merchant.find();
  }
}
