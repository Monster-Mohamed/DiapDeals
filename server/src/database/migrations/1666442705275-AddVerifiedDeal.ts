import { MigrationInterface, QueryRunner } from "typeorm";

export class AddVerifiedDeal1666442705275 implements MigrationInterface {
    name = 'AddVerifiedDeal1666442705275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "verified" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "verified"`);
    }

}
