import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateUsersAndUpdateImages1666107797344 implements MigrationInterface {
    name = 'UpdateUsersAndUpdateImages1666107797344'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "filename"`);
        await queryRunner.query(`ALTER TABLE "images" DROP COLUMN "mimetype"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" ADD "mimetype" character varying`);
        await queryRunner.query(`ALTER TABLE "images" ADD "filename" character varying`);
    }

}
