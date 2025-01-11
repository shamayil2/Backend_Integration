import {useState} from "react"
import useFetch from "../useFetch";

const Hotels = () => {
    const {data,loading,error} = useFetch("https://apis-repo.vercel.app/hotels")
    const [successMessage,setSuccessMessage] = useState("")
    const clickHandler = async(hotelId) => {

        try{
            const response = await fetch(`https://apis-repo.vercel.app/hotels/${hotelId}`,{
                method:"DELETE"
            })

            if(!response.ok){
                throw "Cant delete hotel"
            }

            const data = await response.json()

            if(data){
                setSuccessMessage("Hotel Deleted Successfully")
                window.location.reload()
            }

        }
        catch(error){
            console.log("Cannot delete Hotel")
        }

    }

    return(
        <>
        <ul>
        {data?.map(hotel=>(
            <li key={hotel._id}>{hotel.name}{"    "}<button onClick={()=>clickHandler(hotel._id)}>Delete</button></li>
        ))}
        </ul>
        <p>{successMessage}</p>
        </>
    )
    
}

export default Hotels;