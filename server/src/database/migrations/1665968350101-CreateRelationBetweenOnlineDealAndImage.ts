import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationBetweenOnlineDealAndImage1665968350101 implements MigrationInterface {
    name = 'CreateRelationBetweenOnlineDealAndImage1665968350101'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" RENAME COLUMN "imagePath" TO "landingImageId"`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "landingImageId"`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "landingImageId" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "UQ_a9ba17373f8e4d9f4199ade3295" UNIQUE ("landingImageId")`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295" FOREIGN KEY ("landingImageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295"`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "UQ_a9ba17373f8e4d9f4199ade3295"`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP COLUMN "landingImageId"`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD "landingImageId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" RENAME COLUMN "landingImageId" TO "imagePath"`);
    }

}
