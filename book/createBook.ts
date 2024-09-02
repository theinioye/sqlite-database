import {prisma} from "./prisma"

export async function createBook (title : string ,authorId: number ){
   const book =  await prisma.book.create ({
        data: {
            bookTitle : title,
            authorId :   authorId,
        },
    })
return book
}


