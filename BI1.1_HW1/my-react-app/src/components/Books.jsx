import useFetch  from "../useFetch"
const Books = () => {
const {data,loading,error} = useFetch("http://localhost:3000/books")
console.log(data)
return(
    <>
        <h1>All Books</h1>
        <ul>
            {data?.map(book=> (
                <li>
                    {book.title}
                </li>
            ))}
        </ul>
    </>
)

}

export default  Books;