import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { Category } from '../../category/entities/category.entity';

@Entity('online_deals')
export class OnlineDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  merchant: string;

  @Column({ nullable: true })
  thirdPartySeller: string;

  @Column()
  slug: string;

  @Column()
  // Free OR Paid with the price of shipping
  shipping: string;

  @Column()
  productLink: string;

  @Column()
  productName: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  priceBeforeCoupon: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  instantDiscount: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  clipCouponDiscount: number;

  @Column({ nullable: true })
  couponCode: string;

  @Column({ nullable: true })
  couponCodeDiscount: number;

  @Column({ nullable: true })
  couponCodeExpireDate: Date;

  @Column()
  landingImageId: number;

  @ManyToOne(() => UserEntity, (u) => u.onlineDeals)
  author: UserEntity;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
  categories: Category[];
}
