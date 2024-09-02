import { PrismaClient } from "@prisma/client";
const readlineSync =  require (`readline-sync`)

const prisma = new PrismaClient()
const givenFirstName = readlineSync.question(`Please provide author's first name`)
const givenLastName =  readlineSync.question(`Please provide author's last name`)

export async function run (){
    const author = await prisma.author.create({
        data: {
            firstname : givenFirstName,
            lastname  : givenLastName
        }
    })
    console.log (author)
}


