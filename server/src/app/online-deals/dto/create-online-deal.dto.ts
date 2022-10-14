import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOnlineDealDto {
  @IsNotEmpty()
  readonly merchant: string;

  readonly third_party_seller: string;

  @IsNotEmpty()
  // Free OR Paid with the price of shipping
  readonly shipping: string;

  @IsNotEmpty()
  readonly product_link: string;

  @IsNotEmpty()
  readonly product_name: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  readonly price_before_coupon: number;

  readonly instant_discount: number;

  readonly clip_coupon_discount: number;

  readonly coupon_code: string;

  readonly coupon_code_discount: number;

  readonly coupon_code_expire_date: Date;
}
