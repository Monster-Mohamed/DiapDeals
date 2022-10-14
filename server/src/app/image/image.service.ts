import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private ImageRepository: Repository<Image>
  ) {}

  async findById(id: number): Promise<Image> {
    return await this.ImageRepository.findOneBy({ id });
  }

  async saveImageData(createImageDto: CreateImageDto) {
    const newImage = await this.ImageRepository.create(createImageDto);
    await this.ImageRepository.save(newImage);
    return newImage;
  }

  findAll() {
    return `This action returns all image`;
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }
}
