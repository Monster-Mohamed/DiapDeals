import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRulesToUser1666111762673 implements MigrationInterface {
    name = 'AddRulesToUser1666111762673'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "rules" integer NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "rules"`);
    }

}
