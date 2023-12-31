import { MigrationInterface, QueryRunner } from "typeorm";

export class CheckMigrartion1702741216170 implements MigrationInterface {
    name = 'CheckMigrartion1702741216170'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "dateOfBirth"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "dateOfBirth" date`);
    }

}
