import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { AuthGuard } from '../../security/guards/auth.guard';
import { User } from '../user/user.decorator';
import { UserEntity } from '../user/user.entity';

@Controller('online-deals')
export class OnlineDealsController {
  constructor(private readonly onlineDealsService: OnlineDealsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async create(
    @User() user: UserEntity,
    @Body('onlinedeal') createOnlineDealDto: CreateOnlineDealDto
  ) {
    return await this.onlineDealsService.create(createOnlineDealDto, user);
  }

  @Get()
  findAll() {
    return this.onlineDealsService.findAll();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.onlineDealsService.findOne(slug);
  }
}
