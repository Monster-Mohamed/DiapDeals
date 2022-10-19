import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { ImageService } from '../image/image.service';
import { Image } from '../image/entities/image.entity';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Category, Image])], // Entities
  controllers: [CategoryController],
  providers: [CategoryService, ImageService, ConfigService],
})
export class CategoryModule {}
