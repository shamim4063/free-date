import { MigrationInterface, QueryRunner } from "typeorm";

export class CheckMigrartion1702742506818 implements MigrationInterface {
    name = 'CheckMigrartion1702742506818'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "dateOfBirth" date`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dateOfBirth"`);
    }

}
