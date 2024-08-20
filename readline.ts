const readlineSync = require( "readline-sync")

 export function Question () {
    const givenFirstName = readlineSync.question(`Please provide author's first name`)
    const givenLastName  = readlineSync.question( ` Please provide author's last name`)
    console.log (`First name and Last name received, logging names now`)
}

Question()