import { MigrationInterface, QueryRunner } from "typeorm";

export class AddRelationBetweenOnlineDealAndCategory1666010968716 implements MigrationInterface {
    name = 'AddRelationBetweenOnlineDealAndCategory1666010968716'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "slug" character varying NOT NULL, "description" character varying, "imageId" integer, CONSTRAINT "REL_fcb2e05575ea73809a8ff82fa1" UNIQUE ("imageId"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "online_deals_categories_categories" ("onlineDealsId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_c288a4ebee12765efcb499e99bd" PRIMARY KEY ("onlineDealsId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_101d0751f9273a351fd53ca47d" ON "online_deals_categories_categories" ("onlineDealsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d95fbfe87edef3e532b15a1985" ON "online_deals_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_fcb2e05575ea73809a8ff82fa1d" FOREIGN KEY ("imageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" ADD CONSTRAINT "FK_101d0751f9273a351fd53ca47de" FOREIGN KEY ("onlineDealsId") REFERENCES "online_deals"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" ADD CONSTRAINT "FK_d95fbfe87edef3e532b15a19850" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" DROP CONSTRAINT "FK_d95fbfe87edef3e532b15a19850"`);
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" DROP CONSTRAINT "FK_101d0751f9273a351fd53ca47de"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_fcb2e05575ea73809a8ff82fa1d"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d95fbfe87edef3e532b15a1985"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_101d0751f9273a351fd53ca47d"`);
        await queryRunner.query(`DROP TABLE "online_deals_categories_categories"`);
        await queryRunner.query(`DROP TABLE "categories"`);
    }

}
