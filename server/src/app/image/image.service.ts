import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { Image } from './entities/image.entity';
import { Repository } from 'typeorm';
import { get } from 'https';

@Injectable()
export class ImageService {
  constructor(
    @InjectRepository(Image)
    private ImageRepository: Repository<Image>
  ) {}

  async findById(id: number): Promise<Image> {
    return await this.ImageRepository.findOneBy({ id });
  }

  async saveImageData(createImageDto: CreateImageDto): Promise<Image> {
    const newImage = this.ImageRepository.create(createImageDto);
    await this.ImageRepository.save(newImage);
    return newImage;
  }

  async saveImageFromUrlToDisk(url: string): Promise<void> {
    const request = get(url, (res) => {
      console.log(res.on('data', (d) => d));
    });
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
