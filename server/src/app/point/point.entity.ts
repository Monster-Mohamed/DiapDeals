import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity({ name: 'points' })
export class PointEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 0 })
  points: number;

  @Column({ nullable: true })
  userId: number;

  // relation between points and user
  // every user has one points field \\ one to one
  @OneToOne(() => UserEntity, { nullable: true })
  @JoinColumn()
  user: UserEntity;
}
