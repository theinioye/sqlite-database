import { createBook } from "./book/createBook";
import readlineSync from "readline-sync";
import { listAuthors } from "./listauthors";

export async function run() {
  const title = readlineSync
    .question(`Please provide book title here  →`)
    .trim();

  const authorList = await listAuthors();
  console.log(authorList);

  const authorId = readlineSync.questionInt(`Please provide author Id ➡️`);

  console.log(`Thank you. Your new book has been created.`);

  const newBook = await createBook(title, authorId);

  console.log(newBook);
}
