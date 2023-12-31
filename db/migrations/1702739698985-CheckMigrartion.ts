import { MigrationInterface, QueryRunner } from "typeorm";

export class CheckMigrartion1702739698985 implements MigrationInterface {
    name = 'CheckMigrartion1702739698985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "createdDate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "createdBy" integer`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedDate" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "user" ADD "updatedBy" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "updatedDate"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdBy"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "createdDate"`);
    }

}
