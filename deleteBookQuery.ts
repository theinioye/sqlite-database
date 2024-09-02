import {prisma} from "./prisma"

export async function deleteBook (bookId : number ) {

    const deletedBook = await prisma.book.delete ({
        where : {id : bookId},
    })
    return deletedBook
}