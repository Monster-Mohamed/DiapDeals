import { MigrationInterface, QueryRunner } from "typeorm";

export class AddPriceAfterCouponRowInOnlineDeal1666301820655 implements MigrationInterface {
    name = 'AddPriceAfterCouponRowInOnlineDeal1666301820655'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "priceAfterCoupon" numeric(5,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "priceBeforeCoupon" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "instantDiscount" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "instantDiscount" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "instantDiscount" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "instantDiscount" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "priceBeforeCoupon" SET DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "priceAfterCoupon"`);
    }

}
