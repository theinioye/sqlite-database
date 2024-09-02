
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function listAuthors() {
const authorList = await prisma.author.findMany()

return authorList
}
