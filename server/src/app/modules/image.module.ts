import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([])], // Entities
  controllers: [], // Controllers
  providers: [], // Services
  exports: [], // exports the services to another files
})
export class ImageModule {}
