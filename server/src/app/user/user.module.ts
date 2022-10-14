import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { UserController } from './user.controller';
import { AuthGuard } from '../../security/guards/auth.guard';
import { PointEntity } from '../point/point.entity';
import { UserHelperService } from './user-helper/user-helper.service';
import { UserService } from './user.service';
import { EmailService } from '../global/services/email.service';
import { ConfigService } from '@nestjs/config';
import { ImageService } from '../image/image.service';
import { Image } from '../image/entities/image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PointEntity, Image])], // Entities
  controllers: [UserController], // Controllers
  providers: [
    UserService,
    UserHelperService,
    ImageService,
    AuthGuard,
    EmailService,
    ConfigService,
  ], // Services
  exports: [UserService], // exports the services to another files
})
export class UserModule {}
