import { PrismaClient } from "@prisma/client";


export async function main (){
    const author = await prisma.author.create({
        data: {
            firstname : ,
            lastname  :
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




