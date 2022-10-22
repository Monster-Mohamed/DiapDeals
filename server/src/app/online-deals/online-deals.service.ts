import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { OnlineDeal } from './entities/online-deal.entity';
import { Repository, DataSource } from 'typeorm';
import { PointService } from '../point/point.service';
import { UserEntity } from '../user/user.entity';
import { MerchantService } from '../merchant/merchant.service';
import { ImageService } from '../image/image.service';
import { addSlugHelper } from '@app/helpers/addSlug.helper';
import { CategoryService } from '../category/category.service';
import { AllItemsResponse } from '../../types/AllItemsResponse.type';
import { Message } from '../../types/message.type';
import { UserHelperService } from '../user/user-helper/user-helper.service';

@Injectable()
export class OnlineDealsService {
  constructor(
    @InjectRepository(OnlineDeal)
    private readonly OnlineDeal: Repository<OnlineDeal>,

    private readonly merchantService: MerchantService,

    private readonly userService: UserHelperService,

    private readonly pointService: PointService,

    private readonly imageService: ImageService,

    private readonly categoryService: CategoryService,

    private dataSource: DataSource
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
  ): Promise<Message> {
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
    od.landingImage = image;
    // * Add the slug
    od.slug = slug;
    // * Add the categories
    od.categories = categories;
    // * Add the discount
    od.discount = parseFloat(
      ((od.instantDiscount / od.priceBeforeCoupon) * 100).toFixed(1)
    );
    // * Add the price after the discount
    od.priceAfterCoupon = parseFloat(
      (od.priceBeforeCoupon - od.instantDiscount).toFixed(1)
    );

    // TODO: Save the online deal in the database
    await this.OnlineDeal.save(od);

    // TODO: add 10 points to the user
    await this.pointService.addPointsToUserByUserId(user.id);

    // * return the online deal
    return {
      message:
        'The deal was created successfully, the admin will verify this deal',
    };
  }

  async findAll(
    userId: number,
    query: any
  ): Promise<AllItemsResponse<OnlineDeal>> {
    const qb = this.dataSource
      .getRepository(OnlineDeal)
      .createQueryBuilder('online_deals')
      .leftJoinAndSelect('online_deals.author', 'author')
      .leftJoinAndSelect('online_deals.landingImage', 'image');

    // TODO: Get the user's deals by id

    qb.andWhere('online_deals.verified = 1');

    qb.orderBy(
      'online_deals.createdAt',
      query.orderBy ? query.orderBy : 'DESC'
    );

    if (!query) {
      qb.andWhere('online_deals.authorId = :userId', { userId });
    }

    if (query.limit) {
      qb.limit(query.limit);
    }

    if (query.offset) {
      qb.offset(query.offset);
    }

    if (query.author) {
      const { id } = await this.userService.findByUsername(query.author);
      qb.andWhere('online_deals.authorId = :id', { id });
    }

    if (query.merchant)
      qb.andWhere('online_deals.merchant LIKE :merchant', {
        merchant: `%${query.merchant}`,
      });

    if (query.discount)
      qb.andWhere('online_deals.discount >= :disMin', {
        disMin: query.discount.split('-')[0],
      }).andWhere('online_deals.discount < :disMax', {
        disMax: query.discount.split('-')[1],
      });

    if (query.price?.includes('-')) {
      qb.andWhere('online_deals.priceAfterCoupon >= :priceMin', {
        priceMin: query.price.split('-')[0],
      }).andWhere('online_deals.priceAfterCoupon < :priceMax', {
        priceMax: query.price.split('-')[1],
      });
    } else if (query.price) {
      qb.andWhere('online_deals.priceAfterCoupon = :price', {
        price: query.price,
      });
    }

    if (query.shipping) {
      qb.andWhere('online_deals.shipping LIKE :shipping', {
        shipping: `%${query.shipping}`,
      });
    }

    if (query.category) {
      qb.innerJoin(
        'online_deals.categories',
        'category',
        'category.title = :catTitle',
        { catTitle: query.category }
      );
    }

    const ods = await qb.getMany();
    const odCount = ods.length;

    return { items: ods, count: odCount };
  }

  async verify(slug: string): Promise<OnlineDeal> {
    const od = await this.OnlineDeal.findOneBy({ slug });

    if (!od) {
      throw new HttpException('This deal is not exists.', HttpStatus.NOT_FOUND);
    }

    await this.OnlineDeal.update({ slug }, { verified: 1 });

    od.verified = 1;
    return od;
  }

  async findOne(slug: string): Promise<OnlineDeal> {
    const od = await this.OnlineDeal.findOneBy({ slug });
    if (!od) {
      throw new HttpException(
        'The online deal does not exist.',
        HttpStatus.NOT_FOUND
      );
    }

    return od;
  }

  async findNotVerified(): Promise<OnlineDeal[]> {
    return await this.OnlineDeal.findBy({ verified: 0 });
  }
}
