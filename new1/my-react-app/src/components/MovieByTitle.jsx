/* eslint-disable */

import useFetch from "../useFetch"
const MovieByTitle = ({title}) =>{

    const {data,loading,error} = useFetch(`http://localhost:3000/movies/${title}`)
    console.log(data)
    return(
        <>
            <h1>{data.title}</h1>
            <p>Director: {data.director}</p>
            <p>Country: {data.country}</p>
            <p>ReleasedYead: {data.releaseYear}</p>
        </>
    )
}

export default MovieByTitle