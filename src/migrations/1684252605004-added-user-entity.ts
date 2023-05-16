import { MigrationInterface, QueryRunner } from "typeorm";

export class addedUserEntity1684252605004 implements MigrationInterface {

  name = "addedUserEntity1684252605004";

  public async up(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(
      `CREATE SEQUENCE IF NOT EXISTS "locations_id_seq" OWNED BY "locations"."id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "id" SET DEFAULT nextval('"locations_id_seq"')`,
    );

  }

  public async down(queryRunner: QueryRunner): Promise<void> {

    await queryRunner.query(
      `ALTER TABLE "locations" ALTER COLUMN "id" DROP DEFAULT`,
    );
    await queryRunner.query(`DROP SEQUENCE "locations_id_seq"`);

  }

}
