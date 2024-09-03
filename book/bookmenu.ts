import readlineSync from "readline-sync";
import { run as runCreateBook } from "../createbookfunction";
import { run as runRetrieveBook } from "./retrievebook";
import { run as runUpdateBook } from "./updateBook";
import { run as runListBooks } from "../listBooks";
import { run as runDeleteBook } from "../deleteBook";

export async function run() {
  const userInput = readlineSync.questionInt(
    `Welcome. Please choose an option from the menu below. [1] Create Book [2] Retrieve Book [3]Update Book [4] Delete Book [5] List All Books [6]Exit Menu`
  );

  switch (userInput) {
    case 1: {
      console.log(`You have selected [1] Create Book`);
      runCreateBook();
      break;
    }

    case 2: {
      console.log(`You have selected [2] Retrieve Book`);
      runRetrieveBook();
      break;
    }

    case 3: {
      console.log(`You have selected [3] Update Book`);
      runUpdateBook();
      break;
    }

    case 4: {
      console.log(`You have selected [4] Delete Book`);
      runDeleteBook();

      break;
    }
    case 5: {
      console.log(`You have selected [6] List All Books`);
      runListBooks();
      break;
    }
    case 6: {
      console.log(`Exiting Menu`);
      process.exit(0);
    }
  }
}
