import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateOnlineDealsColumns1665848688628 implements MigrationInterface {
    name = 'UpdateOnlineDealsColumns1665848688628'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "points" ("id" SERIAL NOT NULL, "points" integer NOT NULL DEFAULT '0', "userId" integer NOT NULL, CONSTRAINT "REL_b777120b2815c7a2c3e2cb1e35" UNIQUE ("userId"), CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "path" character varying NOT NULL, "mimetype" character varying NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "online_deals" ("id" SERIAL NOT NULL, "merchant" character varying NOT NULL, "thirdPartySeller" character varying, "shipping" character varying NOT NULL, "productLink" character varying NOT NULL, "productName" character varying NOT NULL, "description" character varying NOT NULL, "priceBeforeCoupon" numeric(5,2) NOT NULL DEFAULT '0', "instantDiscount" numeric(5,2) DEFAULT '0', "clipCouponDiscount" numeric(5,2) DEFAULT '0', "couponCode" character varying, "couponCodeDiscount" integer, "couponCodeExpireDate" TIMESTAMP, "imagePath" character varying NOT NULL, "authorId" integer, CONSTRAINT "PK_6659ebdc6d93230c42259c4512b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "zip_code" integer, "state" character varying, "country" character varying, "gender" character varying, "date_of_birth" TIMESTAMP, "phone_number" character varying NOT NULL DEFAULT '', "isEmailConfirmed" boolean NOT NULL DEFAULT false, "first_name" character varying NOT NULL DEFAULT '', "last_name" character varying NOT NULL DEFAULT '', "referrerEmail" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, "avatarId" integer, CONSTRAINT "REL_3e1f52ec904aed992472f2be14" UNIQUE ("avatarId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "merchants" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_4fd312ef25f8e05ad47bfe7ed25" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "points" ADD CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "online_deals" ADD CONSTRAINT "FK_59cb652aec921ce3dcc7fc15d61" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_3e1f52ec904aed992472f2be147" FOREIGN KEY ("avatarId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_3e1f52ec904aed992472f2be147"`);
        await queryRunner.query(`ALTER TABLE "online_deals" DROP CONSTRAINT "FK_59cb652aec921ce3dcc7fc15d61"`);
        await queryRunner.query(`ALTER TABLE "points" DROP CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350"`);
        await queryRunner.query(`DROP TABLE "merchants"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "online_deals"`);
        await queryRunner.query(`DROP TABLE "images"`);
        await queryRunner.query(`DROP TABLE "points"`);
    }

}
