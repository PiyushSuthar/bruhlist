import { join } from "path";
import { DataSource } from "typeorm";
import { Config } from "./config/env";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: Config.DATABASE_USER,
    password: Config.DATABASE_PASSWORD,
    database: Config.IS_DEV ? "bruhlist" : undefined,
    url: Config.DATABASE_URL,
    synchronize: Config.IS_DEV,
    logging: Config.IS_DEV,
    entities: [join(__dirname, "./entities/*")],
    migrations: [join(__dirname, "./migrations/*")],
})