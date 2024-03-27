import { sql } from "kysely";
import { db } from "./database";
import * as Book from "./book";

describe("Book", () => {
  it("should create a book", async () => {
    await Book.createBook({
      name: "Pai rico pai pobre",
      image_url: "https://m.media-amazon.com/images/I/81ALgAW3gHL._SY522_.jpg",
      author: "Robert Kiyosaki e Sharon L. Lechter",
    });
  });
});
