import { Image } from '@app/app/image/entities/image.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @JoinColumn()
  @OneToOne(() => Image, { eager: true, cascade: true })
  public landingImage: Image;
}
