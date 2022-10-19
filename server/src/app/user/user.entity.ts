import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { hash } from 'bcrypt';
import { PointEntity } from '../point/point.entity';
import { Image } from '../image/entities/image.entity';
import { OnlineDeal } from '../online-deals/entities/online-deal.entity';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ nullable: true })
  zip_code: number;

  @Column({ nullable: true })
  state: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  gender: 'male' | 'female';

  @Column({ nullable: true })
  date_of_birth: Date;

  @Column({ default: '' })
  phone_number: string;

  @Column({ default: false })
  isEmailConfirmed: boolean;

  @Column({ default: '' })
  first_name: string;

  @Column({ default: 0 })
  // 0 => user
  // 1 => admin
  rules: number;

  @Column({ default: '' })
  last_name: string;

  @Column({ default: '' })
  referrerEmail: string;

  @Column({ select: false })
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await hash(this.password, 10);
  }

  @OneToOne(() => PointEntity, (points) => points.user, { eager: true })
  points: PointEntity;

  @JoinColumn()
  @OneToOne(() => Image, { eager: true, cascade: true, nullable: true })
  public avatar: Image;

  @OneToMany(() => OnlineDeal, (od) => od.author, { cascade: true })
  onlineDeals: OnlineDeal[];
}
