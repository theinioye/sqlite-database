import readlineSync from "readline-sync"
import { deleteAuthor } from "./deleteauthorquery"
import { listAuthors } from "./listauthors"


async function main (){
    console.log(`Hello. Welcome. Please select the Author you wish to delete from the list below ⬇️`)

    const authors = await listAuthors()

    authors.forEach( author => {
        console.log (`${author.id} : ${author.firstname} ${author.lastname}`)
    })

    const authorId = Number(readlineSync.question(`Please enter the id of the author you wish to delete from the given list here ➡️`))
    
    const deletedAuthor = await deleteAuthor(authorId)

    console.log (`You have succefully deleted Author "${deletedAuthor.firstname} ${deletedAuthor.lastname}" .`)
}

main ()
