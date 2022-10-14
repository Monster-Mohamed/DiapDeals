import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PointEntity } from './point.entity';

@Injectable()
export class PointService {
  constructor(
    @InjectRepository(PointEntity)
    private readonly Point: Repository<PointEntity>
  ) {}

  async findById(id: number): Promise<PointEntity> {
    const Point = await this.Point.findOneBy({ id });
    return Point;
  }

  async addPointsToUserByUserId(userId: number): Promise<void> {
    const points = await this.Point.findOneBy({ userId });
    await this.Point.update({ userId }, { points: points.points + 10 });
  }
}