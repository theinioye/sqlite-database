import {prisma} from "./prisma"


export async function listBooks () {
    const bookList = await prisma.book.findMany()

    return bookList
}