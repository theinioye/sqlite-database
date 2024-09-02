import readlineSync from "readline-sync";
import { run as runDeleteAuthors } from "./deleteauthor";
import { run as runRetrieveAuthors } from "./retrieve";
import { run as runUpdateAuthors } from "./update";
import { run as runCreateAuthor } from "./compile";
import { listAuthors as runListAuthors } from "./listauthors";

export async function run () {
  const userInput = readlineSync.questionInt(
    `Welcome. [1] Create New Author  [2] Retrieve Author Details [3] Update Author Details [4] Delete Author Details [5] List Authors [6] Exit Menu.Please pick a choice from the menu above`
  );

  const validInputs = [1, 2, 3, 4, 5];

  if (!validInputs.includes(userInput)) {
    console.log(
      `Invalid Input. Please enter a valid option from the menu listed below.
                [1] Create New Author [2] Retrieve Author Details [3]Update Author Details [4] Delete Author`
    );
  }

  switch (userInput) {
    case 1: {
      console.log(`You have chosen [1]. Create New Author `);
      runCreateAuthor();

      break;
    }

    case 2: {
      console.log(`You have selected [2]. Retrieve Author Details`);
      runRetrieveAuthors();
      break;
    }

    case 3: {
      console.log(` You have chosen [3]. Update Author Details`);
      runUpdateAuthors();

      break;
    }

    case 4: {
      console.log(`You have chosen [4]. Delete Author Details`);
      runDeleteAuthors();
      break;
    }

    case 5 : {
        console.log (`You have selected [5] List All Authors `)
            const authorList = await runListAuthors()

            console.log(authorList)

            break  
    }

    case 5: {
      console.log(`Exiting menu`);
      process.exit(0);
    }
  }
}


