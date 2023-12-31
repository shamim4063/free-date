import { MigrationInterface, QueryRunner } from "typeorm";

export class AddisverifiedColInUser1704025243152 implements MigrationInterface {
    name = 'AddisverifiedColInUser1704025243152'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "isVerified" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "isVerified"`);
    }

}
