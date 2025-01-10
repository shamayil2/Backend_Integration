import useFetch from "../useFetch"
const HotelByName = ({hotelName}) => {
    const {data,loading,error} = useFetch(`http://localhost:3000/hotels/${hotelName}`)
    console.log(data)
    return(
        <>
        {data? (<>

        <h1>{data.name}</h1>
        <p><strong>Location: </strong>{data.location}</p>
        <p><strong>Rating: </strong>{data.rating}</p>
        <p><strong>Price Range: </strong>{data.priceRange}</p>
        </>):loading &&<p>Loading...</p>}
        </>
    )

}

export default HotelByName