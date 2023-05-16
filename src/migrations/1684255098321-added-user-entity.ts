import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1684255098321 implements MigrationInterface {

  name = "addedUserEntity1684255098321";

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(
      `CREATE TABLE "location" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "latitude" double precision NOT NULL, "longitude" double precision NOT NULL, "timestamp" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY ("id"))`,
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(`DROP TABLE "location"`);

  }

}
