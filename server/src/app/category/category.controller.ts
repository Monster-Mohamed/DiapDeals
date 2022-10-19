import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { AuthGuard } from '@app/security/guards/auth.guard';
import ImageStorage from '../image/helpers/image-storage.helper';
import { AdminGuard } from '../../security/guards/admin.guard';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseGuards(AuthGuard, AdminGuard)
  @UseInterceptors(FileInterceptor('landingImage', ImageStorage.filterImage))
  @UsePipes(new ValidationPipe())
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
    @UploadedFile() landingImage: Express.Multer.File
  ): Promise<Category> {
    ImageStorage.imageIsRequired(landingImage);
    return await this.categoryService.create(createCategoryDto, landingImage);
  }

  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return this.categoryService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(+id);
  }
}
