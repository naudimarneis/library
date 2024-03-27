import {
  ColumnType,
  Generated,
  Insertable,
  Selectable,
  Updateable,
} from "kysely";

export interface Database {
  book: BookTable;
}

export interface BookTable {
  id: Generated<number>;
  name: string;
  image_url?: string;
  author: string;
  created_at: ColumnType<Date, string | undefined, never>;
}

export type Book = Selectable<BookTable>;
export type NewBook = Insertable<BookTable>;
export type BookUpdate = Updateable<BookTable>;
