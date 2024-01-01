import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTables1704109612252 implements MigrationInterface {
    name = 'AlterTables1704109612252'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "admin"."User" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP, "createdBy" integer, "updatedDate" TIMESTAMP, "updatedBy" integer, "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "username" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "password" character varying(250) NOT NULL, "lastPassword" character varying, CONSTRAINT "UQ_29a05908a0fa0728526d2833657" UNIQUE ("username"), CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_4a257d2c9837248d70640b3e36" ON "admin"."User" ("email") `);
        await queryRunner.query(`CREATE TABLE "client"."Client" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP, "createdBy" integer, "updatedDate" TIMESTAMP, "updatedBy" integer, "name" character varying(50) NOT NULL, "url" character varying(50) NOT NULL, "bannerPath" character varying, "logo" character varying, CONSTRAINT "UQ_899554d014d563bc6ee1686a9c4" UNIQUE ("url"), CONSTRAINT "PK_b79874c8d411b839b9ccc301972" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_899554d014d563bc6ee1686a9c" ON "client"."Client" ("url") `);
        await queryRunner.query(`CREATE TABLE "client"."ClientUser" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP, "createdBy" integer, "updatedDate" TIMESTAMP, "updatedBy" integer, "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "password" character varying(250) NOT NULL, "lastPassword" character varying, "clientId" integer, CONSTRAINT "UQ_ab61a37795617d8b49b363b8a97" UNIQUE ("email"), CONSTRAINT "PK_cb2ea4b93335c7d0e446fb3d9f2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_ab61a37795617d8b49b363b8a9" ON "client"."ClientUser" ("email") `);
        await queryRunner.query(`ALTER TABLE "client"."ClientUser" ADD CONSTRAINT "FK_1dcfb48b15415d4fdfbffb01622" FOREIGN KEY ("clientId") REFERENCES "client"."Client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client"."ClientUser" DROP CONSTRAINT "FK_1dcfb48b15415d4fdfbffb01622"`);
        await queryRunner.query(`DROP INDEX "client"."IDX_ab61a37795617d8b49b363b8a9"`);
        await queryRunner.query(`DROP TABLE "client"."ClientUser"`);
        await queryRunner.query(`DROP INDEX "client"."IDX_899554d014d563bc6ee1686a9c"`);
        await queryRunner.query(`DROP TABLE "client"."Client"`);
        await queryRunner.query(`DROP INDEX "admin"."IDX_4a257d2c9837248d70640b3e36"`);
        await queryRunner.query(`DROP TABLE "admin"."User"`);
    }

}
