import {prisma}  from "./prisma"

export async function updateBook(bookId:number, newBookTitle: string | undefined, newauthorId :number | undefined
) {

    const updatedBook = await prisma.book.update({
        where : { id : bookId},
        data : {
            bookTitle : newBookTitle,
            authorId : newauthorId,
        },
    })
    return updatedBook
}

