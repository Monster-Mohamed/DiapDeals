import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateImages1665649859151 implements MigrationInterface {
    name = 'CreateImages1665649859151'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "images" ("id" SERIAL NOT NULL, "filename" character varying NOT NULL, "path" character varying NOT NULL, "mimetype" character varying NOT NULL, CONSTRAINT "PK_1fe148074c6a1a91b63cb9ee3c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "zip_code" integer, "state" character varying, "country" character varying, "gender" character varying, "date_of_birth" TIMESTAMP, "phone_number" character varying NOT NULL DEFAULT '', "isEmailConfirmed" boolean NOT NULL DEFAULT false, "first_name" character varying NOT NULL DEFAULT '', "last_name" character varying NOT NULL DEFAULT '', "referrerEmail" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, "avatarId" integer, CONSTRAINT "REL_3e1f52ec904aed992472f2be14" UNIQUE ("avatarId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "points" ("id" SERIAL NOT NULL, "points" integer NOT NULL DEFAULT '0', "userId" integer, CONSTRAINT "REL_b777120b2815c7a2c3e2cb1e35" UNIQUE ("userId"), CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_3e1f52ec904aed992472f2be147" FOREIGN KEY ("avatarId") REFERENCES "images"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "points" ADD CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points" DROP CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_3e1f52ec904aed992472f2be147"`);
        await queryRunner.query(`DROP TABLE "points"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "images"`);
    }

}
