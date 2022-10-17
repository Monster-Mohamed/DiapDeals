import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSlugToOnlineDeals1665976750700 implements MigrationInterface {
    name = 'AddSlugToOnlineDeals1665976750700'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "slug" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "slug"`);
    }

}
