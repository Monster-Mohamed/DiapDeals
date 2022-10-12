import { Get, Post, Body, ValidationPipe, UseGuards } from "@nestjs/common";
import { Controller } from "@nestjs/common/decorators";
import { PointService } from '../services/point.service';

@Controller("points")
export class PointController {
  constructor(private readonly PointService: PointService) {}

  @Get()
  async helloPoints() {
    return "fooooooo points";
  }
}
