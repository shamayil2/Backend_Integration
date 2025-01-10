import { useState } from "react"

const AddMovie = () => {

    const [formData,setFormData] = useState({
        title:"",
        releaseYear:"",
        genre:"",
        director:"",
        actors:"",
        language:"",
        country:"",
        rating:"",
        plot:"",
        awards:"",
        posterUrl:"",
        trailerUrl:""

    })

    const changeHandler = (event) => {
        
        const value = event.target.value
        const name = event.target.name
        setFormData((prevState)=> ({...prevState, [name]: name==="releaseYear" || name==="rating"?parseInt(value):value}))
        
    }

    const submitHandler = async (event) => {
        event.preventDefault()
        console.log(formData)

        try{
            const response = await fetch("http://localhost:3000/movies",{
                method:"POST",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(!response.ok){
                console.log("Cannot Add the Movie")
            }else{
                const data = await response.json()
                console.log("Added Movie" , data)
            }

            
        } 
        catch(error){
            console.log(error)
        }
        


    }

    return(
        <>
            <h1>Add New Movie</h1>
            <form onSubmit = {submitHandler}>
            <label htmlFor="titleInput">Title:</label><br/>
            <input type="text" name="title" id="titleInput" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Release Year:</label><br/>
            <input type="number" name="releaseYear" id="releaseYear" onChange={changeHandler}/><br/><br/>
            <label htmlFor="genreInput">Genre:</label><br/>
            <input type="text" name="genre" id="genreInput" onChange={changeHandler}/><br/><br/>
            <label htmlFor="directorInput">Director:</label><br/>
            <input type="text" name="director" id="directorInput" onChange={changeHandler} /><br/><br/>
            <label htmlFor="actorsInput">Actors:</label><br/>
            <input type="text" name="actors" id="actorsInput" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Language:</label><br/>
            <input type="text" name="language" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Country:</label><br/>
            <input type="text" name="country" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Rating:</label><br/>
            <input type="number" name="rating" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Plot:</label><br/>
            <input type="text" name="plot" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Awards</label><br/>
            <input type="text" name="awards" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Poster URL:</label><br/>
            <input type="text" name="posterUrl" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Trailer URL:</label><br/>
            <input type="text" name="trailerUrl" onChange={changeHandler}/><br/><br/>
            <button>Submit</button>
            </form>

        </>
    )
}


export default AddMovie