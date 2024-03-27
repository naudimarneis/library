import type { Kysely } from "kysely";
import { sql } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable("books")
    .addColumn("id", "serial", (col) => col.primaryKey())
    .addColumn("name", "varchar")
    .addColumn("image_url", "varchar")
    .addColumn("author", "varchar")
    .addColumn("created_at", "timestamp", (col) =>
      col.defaultTo(sql`now()`).notNull()
    )
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("books").execute();
}
