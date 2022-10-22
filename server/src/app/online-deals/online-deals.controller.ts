import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Query,
} from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { AuthGuard } from '../../security/guards/auth.guard';
import { User } from '../user/user.decorator';
import { UserEntity } from '../user/user.entity';
import { AllItemsResponse } from '../../types/AllItemsResponse.type';
import { OnlineDeal } from './entities/online-deal.entity';
import { AdminGuard } from '../../security/guards/admin.guard';
import { Message } from '@app/types/message.type';

@Controller('online-deals')
export class OnlineDealsController {
  constructor(private readonly onlineDealsService: OnlineDealsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async create(
    @User() user: UserEntity,
    @Body('onlinedeal') createOnlineDealDto: CreateOnlineDealDto
  ): Promise<Message> {
    return await this.onlineDealsService.create(createOnlineDealDto, user);
  }

  @Get('verify/:slug')
  @UseGuards(AuthGuard, AdminGuard)
  async verify(@Param('slug') slug: string) {
    return await this.onlineDealsService.verify(slug);
  }

  @Get('verified')
  @UseGuards(AuthGuard, AdminGuard)
  async findNotVerified(): Promise<OnlineDeal[]> {
    return await this.onlineDealsService.findNotVerified();
  }

  @Get()
  async findAll(
    @User('id') userId: number,
    @Query() query: any
  ): Promise<AllItemsResponse<OnlineDeal>> {
    return await this.onlineDealsService.findAll(userId, query);
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return await this.onlineDealsService.findOne(slug);
  }
}
