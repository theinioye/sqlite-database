import {prisma} from "./prisma"

export async function deleteAuthor (authorId : number){
    const deletedAuthor = await prisma.author.delete ({
        where : { id : authorId},
    })
    return deletedAuthor
}

