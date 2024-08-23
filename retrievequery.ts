import {prisma} from "./prisma"

export async function retrieve( authorid : number ) {
    const author = await prisma.author.findUnique({
        where : { id : authorid},
        select : { 
            firstname : true,
            lastname : true,
        
            books : {
                select : {
                bookTitle :true, 
                },
        },
    },
    })
 return author
}
