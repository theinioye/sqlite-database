import readlineSync from "readline-sync";
import { retrieve } from "../retrievebookquery";
import { listBooks } from "../listBooksQuery";

export async function run() {
  const bookList = await listBooks();

  console.log(bookList);

  const userInput = readlineSync.questionInt(
    ` Please enter the Id of the book whose details you wish to retrieve from the list above here ➡️ `
  );

  const retrievedBook = await retrieve(userInput);
  console.log(`Here are the details of book with Id number ${userInput}.`);
  console.log(retrievedBook);
}
