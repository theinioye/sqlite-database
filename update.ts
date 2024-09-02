import { updateAuthorById } from "./updateQuery";
import readlineSync from "readline-sync";
import { listAuthors } from "./listauthors";


export async function run() {
  const authorList = await listAuthors();

  console.log(authorList);

  const authorId = readlineSync.questionInt(
    `Please enter the id number of the author whose details you wish to update here ➡️`
  );

  const newFirstName = readlineSync.question(
    `Please enter the new first name here ➡️`
  );

  const newLastName = readlineSync.question(
    `Please input the new last name here ➡️`
  );

  const updatedAuthor = await updateAuthorById(
    authorId,
    newFirstName,
    newLastName
  );

  console.log(
    `You have successfully updated an author. Their updated details are as follows :`,
    updatedAuthor
  );
}


