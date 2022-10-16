import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { UpdateOnlineDealDto } from './dto/update-online-deal.dto';
import { OnlineDeal } from './entities/online-deal.entity';
import { Repository } from 'typeorm';
import { PointService } from '../point/point.service';
import { UserEntity } from '../user/user.entity';
import { MerchantService } from '../merchant/merchant.service';
import { ImageService } from '../image/image.service';

@Injectable()
export class OnlineDealsService {
  constructor(
    @InjectRepository(OnlineDeal)
    private readonly OnlineDeal: Repository<OnlineDeal>,

    private readonly merchantService: MerchantService,

    private readonly pointService: PointService,

    private readonly imageService: ImageService
  ) {}

  async isLinkAlreadyExists(link: string): Promise<void> {
    const result = await this.OnlineDeal.findOneBy({ productLink: link });
    if (result) {
      throw new HttpException(
        'The link you entered is already exists. Please try another link.',
        HttpStatus.BAD_REQUEST
      );
    }
  }

  async create(
    createOnlineDealDto: CreateOnlineDealDto,
    user: UserEntity
  ): Promise<OnlineDeal> {
    // TODO: Get the image url from the product link
    await this.imageService.saveImageFromUrlToDisk(
      createOnlineDealDto.productLink
    );
    return 'd' as any;
    // TODO: check if the merchant isn't exists create a new one
    await this.merchantService.create(createOnlineDealDto.merchant);

    // TODO: If the link is already exists, return error
    await this.isLinkAlreadyExists(createOnlineDealDto.productLink);

    // TODO: create the deal
    const od = this.OnlineDeal.create(createOnlineDealDto);
    // * Add the author to the deal
    od.author = user;
    await this.OnlineDeal.save(od);

    // TODO: add 10 points to the user
    await this.pointService.addPointsToUserByUserId(user.id);

    // * return the online deal
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
