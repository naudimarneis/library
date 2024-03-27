import { db } from "./database";
import { Book, NewBook } from "./types";

export async function createBook(book: NewBook) {
  return await db.insertInto("book").values(book).returningAll()
    .executeTakeFirstOrThrow;
}
