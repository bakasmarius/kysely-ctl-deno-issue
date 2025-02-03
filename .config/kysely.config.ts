import { assertEquals } from "@std/assert";
import { PostgresDialect } from "kysely";
import { defineConfig } from "kysely-ctl";
import Pool from "pg-pool";

assertEquals(1, 1);

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      database: "postgres",
      host: "postgres",
      user: "postgres",
      port: 5432,
      password: "postgres",
      max: 10,
    }),
  }),
  migrations: {
    migrationFolder: "migrations",
  },
});
