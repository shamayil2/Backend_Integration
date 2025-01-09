/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import useFetch from "../useFetch";

const Movies = () => {
    const { data, loading, error } = useFetch("http://localhost:3000/movies")
    console.log(data)
    return (
        <>
            <ul>
                {data?.map(movie=>(
                    <li>{movie.title}</li>
                ))}
            </ul>
        </>
    )

}

export default Movies;