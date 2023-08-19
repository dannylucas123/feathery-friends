import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1692422348189 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE "users" (
          "username"	TEXT NOT NULL UNIQUE,
          "password"	TEXT NOT NULL,
          "isActive"	INTEGER NOT NULL DEFAULT 1,
          "id"	INTEGER NOT NULL,
          PRIMARY KEY("id")
        )
      `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "users"`);
  }
}
