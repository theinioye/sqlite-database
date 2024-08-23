import { prisma } from "./question";

export async function createUser(firstName: string, lastName: string) {
  const author = await prisma.author.create({
    data: {
      firstname: firstName,
      lastname: lastName,
    },
  });
  return author;
}
