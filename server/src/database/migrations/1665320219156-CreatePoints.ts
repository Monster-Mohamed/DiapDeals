import { MigrationInterface, QueryRunner } from "typeorm";

export class CreatePoints1665320219156 implements MigrationInterface {
    name = 'CreatePoints1665320219156'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "username" character varying NOT NULL, "zip_code" integer, "state" character varying, "country" character varying, "gender" character varying, "date_of_birth" TIMESTAMP, "phone_number" character varying NOT NULL DEFAULT '', "isEmailConfirmed" boolean NOT NULL DEFAULT false, "first_name" character varying NOT NULL DEFAULT '', "last_name" character varying NOT NULL DEFAULT '', "image" character varying NOT NULL DEFAULT '', "referrerEmail" character varying NOT NULL DEFAULT '', "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "points" ("id" SERIAL NOT NULL, "points" integer NOT NULL DEFAULT '0', "userId" integer, CONSTRAINT "REL_b777120b2815c7a2c3e2cb1e35" UNIQUE ("userId"), CONSTRAINT "PK_57a558e5e1e17668324b165dadf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "points" ADD CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "points" DROP CONSTRAINT "FK_b777120b2815c7a2c3e2cb1e350"`);
        await queryRunner.query(`DROP TABLE "points"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
