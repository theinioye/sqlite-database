import readlineSync from "readline-sync";
import { run as runAuthorMenu } from "./question";
import { run as runBookMenu } from "./book/bookmenu";

const userInput =
  readlineSync.questionInt(`Welcome. Please select an option from the menu below.
  [1]Book Menu [2]Author Menu [3] Exit Menu`);

switch (userInput) {
  case 1: {
    console.log(`Linking Book Menu `);
    runBookMenu();

    break;
  }
  case 2: {
    console.log(`Linking Author Menu `);
    runAuthorMenu();

    break;
  }
  case 3: {
    console.log(`Exiting Menu `);
    process.exit(0);

    break;
  }
}
