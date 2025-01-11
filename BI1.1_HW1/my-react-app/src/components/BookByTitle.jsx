import useFetch  from "../useFetch";

const BookByTitle = ({bookTitle}) => {

    const {data,loading,error}= useFetch(`https://be-4-assignment1-delta.vercel.app/books/${bookTitle}`)
    console.log(data)
    return(
        <>
        {data? (<>
        <h1>{data.title}</h1>
        <p><strong>Author: </strong>{data.author}</p>
        <p><strong>Release Year: </strong>{data.publishedYear}</p>
        <p><strong>Genre: </strong>{data.genre.join(", ")}</p>
        </>): loading && <p>Loading...</p>}    
        </>
    )

}

export default BookByTitle;