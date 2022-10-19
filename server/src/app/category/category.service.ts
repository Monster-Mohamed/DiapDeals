import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { Repository } from 'typeorm';
import axios from 'axios';
import { ImageService } from '../image/image.service';
import FormData from 'form-data';
import { createReadStream } from 'fs';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly Category: Repository<Category>,

    private readonly imageService: ImageService
  ) {}

  async findByTitles(titles: string[]): Promise<Category[]> {
    if (titles?.length > 0) {
      let cats: Category[] = [];
      for (let i = 0; i < titles.length; i++) {
        const title = titles[i];

        const cat = await this.Category.findOneBy({ title });
        cats.push(cat);
      }

      return cats;
    }
  }

  async isTitleUnique(title: string) {
    const check = await this.Category.findOneBy({ title });

    if (check)
      throw new BadRequestException('The category title is not a unique title');
  }

  async create(
    createCategoryDto: CreateCategoryDto,
    landingImage: Express.Multer.File
  ): Promise<Category> {
    // TODO: Is a unique title
    await this.isTitleUnique(createCategoryDto.title);

    // TODO: Save the landing image
    const folder = 'categories/landingImages';
    const image = await this.imageService.uploadImage(folder, landingImage);

    const savedImage = await this.imageService.saveImageData(image.url);

    const newCat = this.Category.create(createCategoryDto);

    newCat['landingImage'] = savedImage;

    const cat = await this.Category.save(newCat);

    return cat;
  }

  findAll() {
    return `This action returns all category`;
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
