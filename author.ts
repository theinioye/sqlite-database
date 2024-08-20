import { PrismaClient } from "@prisma/client";
const readlineSync =  require (`readline-sync`)

const prisma = new PrismaClient()
const givenFirstName = readlineSync.question(`Please provide author's first name`)
const givenLastName =  readlineSync.question(`Please provide author's last name`)

async function main (){
    const author = await prisma.author.create({
        data: {
            firstname : givenFirstName,
            lastname  : givenLastName
        }
    })
    console.log (author)
}


main()

.then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})