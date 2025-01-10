import HotelByName from "./components/HotelByName"
import Hotels from "./components/Hotels"
export default function App(){

  return(
    <>
      <Hotels/>
      <HotelByName hotelName="Sunset Resort"/>
    </>
  )

}