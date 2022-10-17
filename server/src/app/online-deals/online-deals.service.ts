import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { OnlineDeal } from './entities/online-deal.entity';
import { Repository } from 'typeorm';
import { PointService } from '../point/point.service';
import { UserEntity } from '../user/user.entity';
import { MerchantService } from '../merchant/merchant.service';
import { ImageService } from '../image/image.service';
import { addSlugHelper } from '@app/helpers/addSlug.helper';
import { CategoryService } from '../category/category.service';

@Injectable()
export class OnlineDealsService {
  constructor(
    @InjectRepository(OnlineDeal)
    private readonly OnlineDeal: Repository<OnlineDeal>,

    private readonly merchantService: MerchantService,

    private readonly pointService: PointService,

    private readonly imageService: ImageService,

    private readonly categoryService: CategoryService
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
    // TODO Get the image from the product link and save it to the database
    const image = await this.imageService.saveImageFromUrlToDB(
      createOnlineDealDto.productLink,
      createOnlineDealDto.productName
    );

    // TODO: check if the merchant isn't exists create a new one
    await this.merchantService.create(createOnlineDealDto.merchant);

    // TODO: If the link is already exists, return error
    await this.isLinkAlreadyExists(createOnlineDealDto.productLink);

    // TODO: Add the slug
    const slug = addSlugHelper(createOnlineDealDto.productName);

    // TODO: Get the categories
    const categories = await this.categoryService.findByTitles(
      createOnlineDealDto.categoriesTitles
    );

    // TODO: create the deal
    const od = this.OnlineDeal.create(createOnlineDealDto);
    // * Add the author to the deal
    od.author = user;
    // * Add the deal\product image
    od.landingImageId = image.id;
    // * Add the slug
    od.slug = slug;
    // * Add the categories
    od.categories = categories;

    // TODO: Save the online deal in the database
    await this.OnlineDeal.save(od);

    // TODO: add 10 points to the user
    await this.pointService.addPointsToUserByUserId(user.id);

    // * return the online deal
    return od;
  }

  async findAll(): Promise<OnlineDeal[]> {
    const all = await this.OnlineDeal.find();
    return all;
  }

  async findOne(slug: string): Promise<OnlineDeal> {
    const od = await this.OnlineDeal.findOneBy({ slug });
    if (!od) {
      throw new HttpException(
        'The online deal does not exist.',
        HttpStatus.NOT_FOUND
      );
    }

    od['landingImage'] = await this.imageService.findById(od.landingImageId);

    return od;
  }
}
