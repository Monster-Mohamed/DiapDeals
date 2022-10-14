import { PartialType } from '@nestjs/mapped-types';
import { CreateOnlineDealDto } from './create-online-deal.dto';

export class UpdateOnlineDealDto extends PartialType(CreateOnlineDealDto) {}
