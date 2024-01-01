import { registerAs } from "@nestjs/config";
import { config as dotenvConfig } from "dotenv";
import { DataSource, DataSourceOptions } from "typeorm";

dotenvConfig({ path: ".env" });

const config = {
  type: "postgres",
  url: `${process.env.DB_URL}`,
  entities: ["dist/**/entities/*.entity.js"],
  migrations: ["dist/db/migrations/*.js"],
  migrationsTableName: "db_migrations",
  logging: true,
  autoLoadEntities: true,
  synchronize: false,
};

export default registerAs("typeorm", () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
export const connectionOptions = config as DataSourceOptions;
