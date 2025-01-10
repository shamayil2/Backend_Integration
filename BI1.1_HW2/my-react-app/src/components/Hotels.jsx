import useFetch from "../useFetch"

const Hotels = () => {
    const {data,loading,error} = useFetch("http://localhost:3000/hotels")
    console.log(data)
    return(
        <>
        <h1>All Hotels</h1>
        <ul>
        {data?.map(hotel=>(
            <li>{hotel.name}</li>
         ))}   
        </ul>
         
        </>
    )

}

export default Hotels