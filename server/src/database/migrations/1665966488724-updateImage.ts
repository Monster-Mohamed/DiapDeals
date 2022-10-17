import { MigrationInterface, QueryRunner } from "typeorm";

export class updateImage1665966488724 implements MigrationInterface {
    name = 'updateImage1665966488724'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "filename" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "mimetype" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "mimetype" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "images" ALTER COLUMN "filename" SET NOT NULL`);
    }

}
