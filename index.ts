import { createBook } from "./book/createBook";
import readlineSync from "readline-sync";
import { listAuthors } from "./listauthors";

async function main() {
  const title = readlineSync.question(
    `Please provide the title of the book you wish to log ➡️ `
  );

  const authors = await listAuthors();

  authors.forEach((author) => {
    console.log(`${author.id} : ${author.firstname}, ${author.lastname}`);
  });

  const authorId = Number(readlineSync.question(`Please choose an author `));

  const book = await createBook(title, authorId);

  console.log(book);
}

main();
