import { useState } from "react"
import useFetch  from "../useFetch"

const Books = () => {
const {data,loading,error} = useFetch("https://be-4-assignment1-delta.vercel.app/books")
const [successMessage,setSuccessMessage] = useState("")
console.log(data)

const clickHandler = async(bookId) => {
    try{
        const response = await fetch(`https://be-4-assignment1-delta.vercel.app/books/${bookId}`,{
            method:"DELETE"
        })

        if(!response.ok){
            throw "Cant Delete Book"
        }

        const data = await response.json()
        if(data){
            setSuccessMessage("Book Deleted Successfully")
            window.location.reload()
        }

    }
    catch{
        console.log("Cannot delete book")
    }
}

return(
    <>
        <h1>All Books</h1>
        <ul>
            {data?.map(book=> (
                <li key={book._id}>
                    {book.title}{"   "}<button onClick={()=>clickHandler(book._id)}>Delete</button>
                </li>
            ))}
        </ul>
        <p>{successMessage}</p>
    </>
)

}

export default  Books;