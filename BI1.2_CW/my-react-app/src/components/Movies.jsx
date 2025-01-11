import { useState } from "react"
import useFetch from "../useFetch"
const Movies = () => {
 const {data,loading,error} = useFetch("http://localhost:3000/movies")
 const [successMessage,setSuccessMessage] = useState("")

 const clickHandler = async(movieId) => {

    try{
        const response = await fetch(`http://localhost:3000/movies/${movieId}`,{
            method:"DELETE"
        })

        if(!response.ok){
            throw "cant delete the movie"
        }

        const data = await response.json()
        if(data){
            setSuccessMessage("Movie Deleted Successfully")
            window.location.reload()
        }

    }
    catch(error){
        console.log(error)
    }

 }

    return(
        <>
        <ul>
            {data?.map(movie=>(
                <li key={movie._id}>{movie.title}{"  "}<button onClick={()=>clickHandler(movie._id)}>Delete</button></li>
            ))}
        </ul>
        <p>{successMessage}</p>
        </>
    )

}

export default Movies