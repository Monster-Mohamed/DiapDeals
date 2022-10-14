import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('online_deals')
export class OnlineDeal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  merchant: string;

  @Column({ nullable: true })
  third_party_seller: string;

  @Column()
  // Free OR Paid with the price of shipping
  shipping: string;

  @Column()
  product_link: string;

  @Column()
  product_name: string;

  @Column()
  description: string;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  price_before_coupon: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  instant_discount: number;

  @Column({
    nullable: true,
    type: 'decimal',
    precision: 5,
    scale: 2,
    default: 0,
  })
  clip_coupon_discount: number;

  @Column({ nullable: true })
  coupon_code: string;

  @Column({ nullable: true })
  coupon_code_discount: number;

  @Column({ nullable: true })
  coupon_code_expire_date: Date;
}
