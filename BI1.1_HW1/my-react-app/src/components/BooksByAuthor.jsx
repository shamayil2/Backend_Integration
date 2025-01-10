import useFetch from "../useFetch"

const BooksByAuthor = ({authorName}) => {
    const {data,loading,error} = useFetch(`http://localhost:3000/books/author/${authorName}`)
    console.log(data)
    return(
        <>
        {data? (<>
        <h1>Books By {data[0].author}</h1>
        <ul>
        {data.map(book=> (
            <li>{book.title}</li>
        ))}
        </ul>
        </>): loading && <p>Loading...</p>}
        
       
        </>
    )

}

export default BooksByAuthor