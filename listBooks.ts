 import { listBooks } from "./listBooksQuery";

 export async function run (){

    const books = await listBooks()

    books.forEach ((book)=> {
        console.log(`BookId : ${book.id}, Book Title : ${book.bookTitle}, Author Id : ${book.authorId}`)
    })
 }


     
    
