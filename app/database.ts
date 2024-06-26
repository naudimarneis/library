import { Database } from "./types.js";
import pkg from "pg";
const { Pool } = pkg;
import { Kysely, PostgresDialect } from "kysely";

const dialect = new PostgresDialect({
  pool: new Pool({
    database: "library",
    host: "localhost",
    user: "postgres",
    password: "postgres",
    port: 5432,
    max: 5,
  }),
});

export const db = new Kysely<Database>({
  dialect,
});
