import {
  AfterInsert,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from '../../user/user.entity';
import { Category } from '../../category/entities/category.entity';
import { Image } from '../../image/entities/image.entity';

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

  @Column({
    type: 'decimal',
    precision: 3,
    scale: 1,
    nullable: true,
  })
  discount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  priceBeforeCoupon: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  instantDiscount: number;

  @Column({
    type: 'decimal',
    precision: 5,
    scale: 2,
  })
  priceAfterCoupon: number;

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

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'timestamp', nullable: true })
  updatedAt: Date;

  @BeforeInsert()
  createTimestamp() {
    this.createdAt = new Date();
  }

  @BeforeUpdate()
  updateTimestamp() {
    this.updatedAt = new Date();
  }

  @JoinColumn()
  @OneToOne(() => Image, { eager: true, cascade: true })
  public landingImage: Image;

  @ManyToOne(() => UserEntity, (u) => u.onlineDeals)
  author: UserEntity;

  @Column({ default: 0 })
  verified: number;

  @ManyToMany(() => Category, { cascade: true })
  @JoinTable()
  categories: Category[];
}
