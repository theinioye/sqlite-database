import { deleteBook } from "./deleteBookQuery";
import readlinesync from "readline-sync"
import { listBooks } from "./listBooksQuery";

export async function run () {

    const bookList = await listBooks()
     console.log (bookList)

     const userInput = readlinesync.questionInt(`Welcome. Please input the Id of the book you wish to delete from the list above here ➡️`)
     
     const deletedbook = await deleteBook(userInput)

     console.log (`You have successfully deleted "${deletedbook.bookTitle}", Id no : ${deletedbook.id}, Author Id: ${deletedbook.authorId}  `)

}