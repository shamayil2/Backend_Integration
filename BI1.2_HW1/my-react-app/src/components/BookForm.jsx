import { useState } from "react"

const BookForm = () => {

    const [formData,setFormData] = useState({
        title:"",
        author:"",
        publishedYear:"",
        genre:"",
        language:"",
        country:"",
        rating:"",
        summary:"",
        coverImageUrl:""
    })

    const changeHandler = (event) => {
        const value = event.target.value
        const name = event.target.name
        setFormData((prevData)=>({...prevData,[name]:event.target.name==="rating"||event.target.name==="publishedYear"?parseInt(value):value}))

    }

    const submitHandler = async(event) => {

        event.preventDefault()
        console.log(formData)
        try{

            const response = await fetch("http://localhost:3000/books",{
                method:"POST",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(!response.ok){
                console.log("Cannot Add Book")
            }else{
                const data = await response.json()
                console.log("Book Added", data)
            }

        }
        catch(error){
            console.log(error)
        }

    }

    return(
        <>
        <h1>Add a Book</h1>
        <form onSubmit = {submitHandler}>
        <label htmlFor="">Title:</label><br/>
        <input type="text" name="title" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Author:</label><br/>
        <input type="text" name="author" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Published Year:</label><br/>
        <input type="number" name="publishedYear" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Genre:</label><br/>
        <input type="text" name="genre" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Language</label><br/>
        <input type="text" name="language" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Country:</label><br/>
        <input type="text" name="country" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Rating:</label><br/>
        <input type="number" name="rating" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Book Summary:</label><br/>
        <input type="text" name="summary" onChange={changeHandler}/><br/><br/>
        <label htmlFor="">Cover Image Url</label><br/>
        <input type="text" name="coverImageUrl" onChange={changeHandler}/><br/><br/>
        <button>Submit</button>



        </form>
        </>
    )

}

export default BookForm