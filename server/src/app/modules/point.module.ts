import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PointEntity } from "../../database/entities/point.entity";
import { PointController } from "../controllers/point.controller";
import { PointService } from "../services/point.service";
import { AuthGuard } from "../../security/guards/auth.guard";

@Module({
  imports: [TypeOrmModule.forFeature([PointEntity])], // Entities
  controllers: [PointController], // Controllers
  providers: [PointService, AuthGuard], // Services
})
export class PointModule {}
