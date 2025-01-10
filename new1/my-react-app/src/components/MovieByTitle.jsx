/* eslint-disable */

import useFetch from "../useFetch"
const MovieByTitle = ({title}) =>{

    const {data,loading,error} = useFetch(`http://localhost:3000/movies/${title}`)
    
    return(
        <>
            {data? ( <><h1>{data.title}</h1>
            <p>Director: {data.director}</p>
            <p>Country: {data.country}</p>
            <p>ReleasedYead: {data.releaseYear}</p>
            <p>Awards : {data.awards}</p></>): loading&& <p>Loading...</p>}
           
        </>
    )
}

export default MovieByTitle