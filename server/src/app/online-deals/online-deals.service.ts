import { Injectable } from '@nestjs/common';
import { CreateOnlineDealDto } from './dto/create-online-deal.dto';
import { UpdateOnlineDealDto } from './dto/update-online-deal.dto';

@Injectable()
export class OnlineDealsService {
  create(createOnlineDealDto: CreateOnlineDealDto) {
    return 'This action adds a new onlineDeal';
  }

  findAll() {
    return `This action returns all onlineDeals`;
  }

  findOne(id: number) {
    return `This action returns a #${id} onlineDeal`;
  }

  update(id: number, updateOnlineDealDto: UpdateOnlineDealDto) {
    return `This action updates a #${id} onlineDeal`;
  }

  remove(id: number) {
    return `This action removes a #${id} onlineDeal`;
  }
}
