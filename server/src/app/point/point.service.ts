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

  /**
   * Add points to the user by the user's id
   * @param userId: number
   * @param no: number? and the default is 10
   */
  async addPointsToUserByUserId(userId: number, no = 10): Promise<void> {
    const points = await this.Point.findOneBy({ userId });
    await this.Point.update({ userId }, { points: points?.points + no });
  }
}
