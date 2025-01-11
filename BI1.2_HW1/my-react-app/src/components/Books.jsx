import useFetch from "../useFetch"
const Books = () => {
    const {data,loading,error} = useFetch("http://localhost:3000/books")
    return(
        <>
        <ul>
        {data?.map(book=>(
            <li key={book._id}>{book.title}</li>
        ))}
        </ul>
        </>
    )

}

export default Books