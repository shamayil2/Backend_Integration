import useFetch from "../useFetch"
const Movies = () => {
 const {data,loading,error} = useFetch("http://localhost:3000/movies")
    return(
        <>
        <ul>
            {data?.map(movie=>(
                <li key={movie._id}>{movie.title}</li>
            ))}
        </ul>
        </>
    )

}

export default Movies