import { MigrationInterface, QueryRunner } from 'typeorm';

export class addedUserEntity1684252245950 implements MigrationInterface {

  name = 'addedUserEntity1684252245950';

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(
      `CREATE TABLE "locations" ("id" integer NOT NULL, "latitude" integer NOT NULL, "longitude" integer NOT NULL, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`,
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`DROP TABLE "locations"`);

  }

}
