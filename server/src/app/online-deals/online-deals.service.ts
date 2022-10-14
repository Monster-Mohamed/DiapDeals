import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { UpdateOnlineDealDto } from './dto/update-online-deal.dto';
import { OnlineDeal } from './entities/online-deal.entity';
import { Repository } from 'typeorm';
import { PointService } from '../point/point.service';
import { Merchant } from '../merchant/entities/merchant.entity';

@Injectable()
export class OnlineDealsService {
  constructor(
    @InjectRepository(OnlineDeal)
    private readonly OnlineDeal: Repository<OnlineDeal>,

    @InjectRepository(Merchant)
    private readonly Merchant: Repository<Merchant>,

    private readonly pointService: PointService
  ) {}

  async isLinkAlreadyExists(link: string): Promise<void> {
    const result = await this.OnlineDeal.findOneBy({ product_link: link });
    if (result) {
      throw new HttpException(
        'The link you entered is already exists. Please try another link.',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(
    createOnlineDealDto: CreateOnlineDealDto,
    userId: number
  ): Promise<OnlineDeal> {
    // TODO: create a new merchant
    const merchant = this.Merchant.create({
      name: createOnlineDealDto.merchant,
    });

    await this.Merchant.save(merchant);

    // TODO: If the link is already exists, return error
    await this.isLinkAlreadyExists(createOnlineDealDto.product_link);

    // TODO: create the deal
    const od = this.OnlineDeal.create(createOnlineDealDto);
    await this.OnlineDeal.save(od);

    // TODO: add 10 points to the user
    await this.pointService.addPointsToUserByUserId(userId);

    return od;
  }

  async findAll() {
    return `This action returns all onlineDeals`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} onlineDeal`;
  }

  async update(id: number, updateOnlineDealDto: UpdateOnlineDealDto) {
    return `This action updates a #${id} onlineDeal`;
  }

  async remove(id: number) {
    return `This action removes a #${id} onlineDeal`;
  }
}
