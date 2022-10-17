import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOnlineDeal1665971207340 implements MigrationInterface {
    name = 'UpdateOnlineDeal1665971207340'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295"`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "landingImageId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295" FOREIGN KEY ("landingImageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295"`);
        await queryRunner.query(`ALTER TABLE "online_deals" ALTER COLUMN "landingImageId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295" FOREIGN KEY ("landingImageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
