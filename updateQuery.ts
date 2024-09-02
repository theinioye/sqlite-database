import {prisma} from "./prisma"


export async function updateAuthorById(authorId : number, newFirstName: string | undefined, newLastName : string |undefined ) {


    
    const updatedAuthor = await prisma.author.update({ 
        where : {id: authorId},
        data : {
            firstname : newFirstName,
            lastname : newLastName,
        },

    })
    return updatedAuthor
}