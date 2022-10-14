import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { UpdateOnlineDealDto } from './dto/update-online-deal.dto';
import { AuthGuard } from '../../security/guards/auth.guard';
import { User } from '../user/user.decorator';

@Controller('online-deals')
export class OnlineDealsController {
  constructor(private readonly onlineDealsService: OnlineDealsService) {}

  @Post()
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  async create(
    @User('id') userId: number,
    @Body('onlinedeal') createOnlineDealDto: CreateOnlineDealDto
  ) {
    return await this.onlineDealsService.create(createOnlineDealDto, userId);
  }

  @Get()
  findAll() {
    return this.onlineDealsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.onlineDealsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOnlineDealDto: UpdateOnlineDealDto
  ) {
    return this.onlineDealsService.update(+id, updateOnlineDealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onlineDealsService.remove(+id);
  }
}
