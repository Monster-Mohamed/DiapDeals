import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOnlineDealDto {
  @IsNotEmpty()
  readonly merchant: string;

  @IsNotEmpty()
  readonly categoriesTitles: string[];

  readonly thirdPartySeller: string;

  @IsNotEmpty()
  // Free OR Paid with the price of shipping
  readonly shipping: string;

  @IsNotEmpty()
  readonly productLink: string;

  @IsNotEmpty()
  readonly productName: string;

  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  readonly priceBeforeCoupon: number;

  @IsNotEmpty()
  @IsNumber()
  readonly instantDiscount: number;

  readonly clipCouponDiscount: number;

  readonly couponCode: string;

  readonly couponCodeDiscount: number;

  readonly couponCodeExpireDate: Date;
}
