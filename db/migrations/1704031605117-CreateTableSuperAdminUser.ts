import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableSuperAdminUser1704031605117 implements MigrationInterface {
    name = 'CreateTableSuperAdminUser1704031605117'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin"."user" ("createdDate" TIMESTAMP, "createdBy" integer, "updatedDate" TIMESTAMP, "updatedBy" integer, "id" SERIAL NOT NULL, "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "username" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "password" character varying(250) NOT NULL, "lastPassword" character varying, CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_e12875dfb3b1d92d7d7c5377e2" ON "admin"."user" ("email") `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX "admin"."IDX_e12875dfb3b1d92d7d7c5377e2"`);
        await queryRunner.query(`DROP TABLE "admin"."user"`);
    }

}
