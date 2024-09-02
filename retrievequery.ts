import { prisma } from "./prisma";

export async function retrieve(authorid: number) {
  const author = await prisma.author.findUnique({
    where: { id: authorid },
    select: {
        id :true,
      firstname: true,
      lastname: true,

      books: {
        select: {
            id : true,
          bookTitle: true,
        },
      },
    },
  });
  return author;
}
