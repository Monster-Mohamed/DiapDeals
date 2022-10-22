import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateDB1666238802180 implements MigrationInterface {
    name = 'CreateDB1666238802180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" SERIAL NOT NULL, "points" integer NOT NULL DEFAULT '0', "userId" integer NOT NULL, CONSTRAINT "REL_b777120b2815c7a2c3e2cb1e35" UNIQUE ("userId"), CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "path" character varying NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "description" character varying, "landingImageId" integer, CONSTRAINT "UQ_aa79448dc3e959720ab4c13651d" UNIQUE ("title"), CONSTRAINT "REL_3ece0e011cc43113649b6b414c" UNIQUE ("landingImageId"), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "online_deals" ("id" SERIAL NOT NULL, "merchant" character varying NOT NULL, "thirdPartySeller" character varying, "slug" character varying NOT NULL, "shipping" character varying NOT NULL, "productLink" character varying NOT NULL, "productName" character varying NOT NULL, "description" character varying NOT NULL, "discount" integer, "priceBeforeCoupon" numeric(5,2) NOT NULL DEFAULT '0', "instantDiscount" numeric(5,2) DEFAULT '0', "clipCouponDiscount" numeric(5,2) DEFAULT '0', "couponCode" character varying, "couponCodeDiscount" integer, "couponCodeExpireDate" TIMESTAMP, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP, "landingImageId" integer, "authorId" integer, CONSTRAINT "REL_a9ba17373f8e4d9f4199ade329" UNIQUE ("landingImageId"), CONSTRAINT "PK_6659ebdc6d93230c42259c4512b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "zip_code" integer, "state" character varying, "country" character varying, "gender" character varying, "date_of_birth" TIMESTAMP, "phone_number" character varying NOT NULL DEFAULT '', "isEmailConfirmed" boolean NOT NULL DEFAULT false, "first_name" character varying NOT NULL DEFAULT '', "rules" integer NOT NULL DEFAULT '0', "last_name" character varying NOT NULL DEFAULT '', "referrerEmail" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, "avatarId" integer, CONSTRAINT "REL_3e1f52ec904aed992472f2be14" UNIQUE ("avatarId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "merchants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4fd312ef25f8e05ad47bfe7ed25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "online_deals_categories_categories" ("onlineDealsId" integer NOT NULL, "categoriesId" integer NOT NULL, CONSTRAINT "PK_c288a4ebee12765efcb499e99bd" PRIMARY KEY ("onlineDealsId", "categoriesId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_101d0751f9273a351fd53ca47d" ON "online_deals_categories_categories" ("onlineDealsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d95fbfe87edef3e532b15a1985" ON "online_deals_categories_categories" ("categoriesId") `);
        await queryRunner.query(`ALTER TABLE "points" ADD CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "categories" ADD CONSTRAINT "FK_3ece0e011cc43113649b6b414c5" FOREIGN KEY ("landingImageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295" FOREIGN KEY ("landingImageId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "FK_59cb652aec921ce3dcc7fc15d61" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_3e1f52ec904aed992472f2be147" FOREIGN KEY ("avatarId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" ADD CONSTRAINT "FK_101d0751f9273a351fd53ca47de" FOREIGN KEY ("onlineDealsId") REFERENCES "online_deals"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" ADD CONSTRAINT "FK_d95fbfe87edef3e532b15a19850" FOREIGN KEY ("categoriesId") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" DROP CONSTRAINT "FK_d95fbfe87edef3e532b15a19850"`);
        await queryRunner.query(`ALTER TABLE "online_deals_categories_categories" DROP CONSTRAINT "FK_101d0751f9273a351fd53ca47de"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_3e1f52ec904aed992472f2be147"`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "FK_59cb652aec921ce3dcc7fc15d61"`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "FK_a9ba17373f8e4d9f4199ade3295"`);
        await queryRunner.query(`ALTER TABLE "categories" DROP CONSTRAINT "FK_3ece0e011cc43113649b6b414c5"`);
        await queryRunner.query(`ALTER TABLE "points" DROP CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_d95fbfe87edef3e532b15a1985"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_101d0751f9273a351fd53ca47d"`);
        await queryRunner.query(`DROP TABLE "online_deals_categories_categories"`);
        await queryRunner.query(`DROP TABLE "merchants"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "online_deals"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
