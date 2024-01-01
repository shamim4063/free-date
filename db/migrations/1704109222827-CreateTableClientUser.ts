import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableClientUser1704109222827 implements MigrationInterface {
    name = 'CreateTableClientUser1704109222827'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "client"."client_user" ("id" SERIAL NOT NULL, "createdDate" TIMESTAMP, "createdBy" integer, "updatedDate" TIMESTAMP, "updatedBy" integer, "firstName" character varying(50) NOT NULL, "lastName" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "isVerified" boolean NOT NULL DEFAULT false, "password" character varying(250) NOT NULL, "lastPassword" character varying, "clientId" integer, CONSTRAINT "UQ_57737f7835a77e39967ab4b0d00" UNIQUE ("email"), CONSTRAINT "PK_f18a6fabea7b2a90ab6bf10a650" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE UNIQUE INDEX "IDX_57737f7835a77e39967ab4b0d0" ON "client"."client_user" ("email") `);
        await queryRunner.query(`ALTER TABLE "client"."client_user" ADD CONSTRAINT "FK_eb3e491fab0ea63cd9f9ffba47d" FOREIGN KEY ("clientId") REFERENCES "client"."client"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "client"."client_user" DROP CONSTRAINT "FK_eb3e491fab0ea63cd9f9ffba47d"`);
        await queryRunner.query(`DROP INDEX "client"."IDX_57737f7835a77e39967ab4b0d0"`);
        await queryRunner.query(`DROP TABLE "client"."client_user"`);
    }

}
