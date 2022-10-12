import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../../database/entities/user.entity";
import { UserController } from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { AuthGuard } from "../../security/guards/auth.guard";
import { PointEntity } from "../../database/entities/point.entity";
import { EmailService } from "../services/email/email.service";
import { UserHelperService } from "../services/user-helper/user-helper.service";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PointEntity])], // Entities
  controllers: [UserController], // Controllers
  providers: [UserService, UserHelperService, AuthGuard, EmailService], // Services
  exports: [UserService], // exports the services to another files
})
export class UserModule {}
