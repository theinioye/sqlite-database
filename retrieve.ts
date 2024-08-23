import { listAuthors } from "./listauthors"
import readlineSync from "readline-sync"
import {retrieve} from "./retrievequery"



async function main () {
    const authors = await listAuthors()

    authors.forEach(author => {
        console.log( `${author.id}: ${author.firstname} ${author.lastname}` )
    })
    const authorId = Number(readlineSync.question(`Please enter the id of the author whose details you wish to retrieve here ➡️ `))

    const author = await retrieve(authorId)

    console.log(author)

    
}

main()


