import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1666111762673 implements MigrationInterface {
  name = 'Users1666111762673';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO users (email, rules, username, password, first_name, last_name, country) VALUES (
        'ma8494927@gmail.com',
        1,
        'monster-admin',
        '$2b$10$x3P0RdrTKUoeg7HJkeOEy.Dh4q7DYo21Tk6GCRH1somRFMs91jSau',
        'Mohamed',
        'Monster',
        'USA'
      )`
    );
    await queryRunner.query(`INSERT INTO points (points) VALUES (100)`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
