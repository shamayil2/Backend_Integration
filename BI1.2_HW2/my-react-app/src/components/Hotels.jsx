import useFetch from "../useFetch";

const Hotels = () => {
    const {data,loading,error} = useFetch("http://localhost:3000/hotels")
    return(
        <>
        <ul>
        {data?.map(hotel=>(
            <li key={hotel._id}>{hotel.name}</li>
        ))}
        </ul>
        </>
    )
    
}

export default Hotels;