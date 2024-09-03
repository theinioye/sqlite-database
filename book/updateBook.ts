import readlineSync from "readline-sync";
import { updateBook } from "../updateBookQuery";
import { listBooks } from "../listBooksQuery";
import { retrieve as retrieveBook } from "./retrievebookquery";
import { listAuthors } from "../listauthors";

export async function run() {
  const bookslist = await listBooks();
  console.log(bookslist);

  const userInput = readlineSync.questionInt(
    ` Welcome . Please enter the Id of the book whose details you wish to update here from the list above ➡️ `
  );

  const oldBookDetails = await retrieveBook(userInput);

  console.log(
    `Here are the present details of the book with the Id number you have chosen `
  );
  console.log(oldBookDetails);

  const newBookTitle = readlineSync.question(
    `Please input the new title for the selected book here ➡️ `
  );

  const authorList = await listAuthors();

  console.log(authorList);

  const newAuthorId = readlineSync.questionInt(
    `Please input the Id for the new author of the selected book from the list above here ➡️`
  );

  const updatedBook = await updateBook(userInput, newBookTitle, newAuthorId);

  console.log(
    `You have successfully updated a book. This is what it looks like now `
  );
  console.log(updatedBook);
}
