import { createUser } from "./createUser";
import readlineSync from "readline-sync";

async function main() {
  const firstname = readlineSync
    .question(`Please provide the author's first name here →`)
    .trim();
  const lastname = readlineSync
    .question(`Please provide author's last name here ➡️`)
    .trim();
  console.log(`Thank you. Author's name will now be logged.`);

  const authorName = await createUser(firstname, lastname);

  console.log(authorName);
}
main();
