import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableClient1704035230706 implements MigrationInterface {
    name = 'CreateTableClient1704035230706'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client"."client" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP, "createdBy" integer, "updatedDate" TIMESTAMP, "updatedBy" integer, "name" character varying(50) NOT NULL, "url" character varying(50) NOT NULL, "bannerPath" character varying, "logo" character varying, CONSTRAINT "UQ_8dad3974a49f6fb31bf764b4e47" UNIQUE ("url"), CONSTRAINT "PK_96da49381769303a6515a8785c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_8dad3974a49f6fb31bf764b4e4" ON "client"."client" ("url") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "client"."IDX_8dad3974a49f6fb31bf764b4e4"`);
        await queryRunner.query(`DROP TABLE "client"."client"`);
    }

}
