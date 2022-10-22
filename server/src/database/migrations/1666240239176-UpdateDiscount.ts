import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDiscount1666240239176 implements MigrationInterface {
    name = 'UpdateDiscount1666240239176'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "discount" numeric(3,1)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "discount"`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "discount" integer`);
    }

}
