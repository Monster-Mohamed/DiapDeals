import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OnlineDealsService } from './online-deals.service';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { UpdateOnlineDealDto } from './dto/update-online-deal.dto';

@Controller('online-deals')
export class OnlineDealsController {
  constructor(private readonly onlineDealsService: OnlineDealsService) {}

  @Post()
  create(@Body() createOnlineDealDto: CreateOnlineDealDto) {
    return this.onlineDealsService.create(createOnlineDealDto);
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
  update(@Param('id') id: string, @Body() updateOnlineDealDto: UpdateOnlineDealDto) {
    return this.onlineDealsService.update(+id, updateOnlineDealDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.onlineDealsService.remove(+id);
  }
}
