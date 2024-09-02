import { createUser } from "./createUser";
import readlineSync from "readline-sync";

export async function run() {
  const firstname = readlineSync
    .question(`Please provide the author's first name here →`)
    .trim();
  const lastname = readlineSync
    .question(`Please provide author's last name here ➡️`)
    .trim();
  console.log(`Thank you. Author details will now be logged.`);

  const authorName = await createUser(firstname, lastname);

  console.log(authorName);
}
