import { prisma } from "../prisma";

export async function retrieve(bookId: number) {
  const book = await prisma.book.findUnique({
    where: { id: bookId },
    select: {
      id: true,
      bookTitle: true,
      author: true,
      authorId: true,
    },
  });
  return book;
}
