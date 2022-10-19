import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Image } from './entities/image.entity';
import { CloudinaryProvider } from './cloudinary.provider';

@Module({
  imports: [TypeOrmModule.forFeature([Image])], // Entities
  providers: [CloudinaryProvider, ImageService],
})
export class ImageModule {}
