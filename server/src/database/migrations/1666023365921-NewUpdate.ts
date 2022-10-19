import { MigrationInterface, QueryRunner } from "typeorm";

export class NewUpdate1666023365921 implements MigrationInterface {
    name = 'NewUpdate1666023365921'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_fcb2e05575ea73809a8ff82fa1d"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "slug"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "REL_fcb2e05575ea73809a8ff82fa1"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "imageId"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "landingImageId" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_3ece0e011cc43113649b6b414c5" UNIQUE ("landingImageId")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "UQ_aa79448dc3e959720ab4c13651d" UNIQUE ("title")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_3ece0e011cc43113649b6b414c5" FOREIGN KEY ("landingImageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_3ece0e011cc43113649b6b414c5"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_aa79448dc3e959720ab4c13651d"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "UQ_3ece0e011cc43113649b6b414c5"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP COLUMN "landingImageId"`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "imageId" integer`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "REL_fcb2e05575ea73809a8ff82fa1" UNIQUE ("imageId")`);
        await queryRunner.query(`ALTER TABLE "categories" ADD "slug" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_fcb2e05575ea73809a8ff82fa1d" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
