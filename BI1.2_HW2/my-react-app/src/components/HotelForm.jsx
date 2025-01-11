import { useState } from "react"
const HotelForm = () => {

    const [formData,setFormData] = useState({
        name:"",
        category:"",
        location:"",
        rating: 0,
        website:"",
        phoneNumber:"",
        checkInTime:"",
        checkOutTime:"",
        amenities:"",
        priceRange:"",
        reservationsNeeded:false,
        isParkingAvailable:false,
        isWifiAvailable:false,
        isPoolAvailable:false,
        isSpaAvailable:false,
        isRestaurantAvailable:false,
        photos:""
    })

    const changeHandler = (event)=> {
        const value = event.target.value
        const name = event.target.name
        const clicked = event.target.checked
        setFormData((prevData)=>({...prevData,[name]:name==="rating"?parseInt(value):value}))
    
    }

    const clickHandler = (event) =>{
        const checked = event.target.checked
        const name = event.target.name
        setFormData((prevData)=> ({...prevData,[name]:checked}))
    }

    const submitHandler = async(event) => {
        event.preventDefault()
        console.log(formData)
        try{
            const response = await fetch("http://localhost:3000/hotels",{
                method:"POST",
                body:JSON.stringify(formData),
                headers:{
                    "Content-Type":"application/json"
                }
            })

            if(!response.ok){
                console.log("Cant Add Hotel")
            }else{
                const data = await response.json()
                console.log("Hotel Added" , data)
            }

        }
        catch(error){
            console.log(error)
        }

    } 

    return(
        <>
            <h1>Add a Hotel</h1>
            <form onSubmit={submitHandler}>
            <label htmlFor="">Name:</label><br/>
            <input type="text" name="name" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Category:</label><br/>
            <select name="category" id="" onChange={changeHandler}>

                <option value="Budget">Budget</option>
                <option value="Mid-Range">Mid-Range</option>
                <option value="Luxury">Luxury</option>
                <option value="Boutique">Boutique</option>
                <option value="Resort">Resort</option>
                <option value="Other">Other</option>
            </select><br/><br/>
            <label htmlFor="">Location:</label><br/>
            <input type="text" name="location" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Rating:</label><br/>
            <input type="number" name="rating" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Website:</label><br/>
            <input type="text" name="website" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Phone Number:</label><br/>
            <input type="text" name="phoneNumber" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Check In Time:</label><br/>
            <input type="text" name="checkInTime" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Check Out Time:</label><br/>
            <input type="text" name="checkOutTime" onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Amenities:</label><br/>
            <input type="text" name="amenities"  onChange={changeHandler}/><br/><br/>
            <label htmlFor="">Price Range:</label><br/>
            <select name="" id="" onChange={changeHandler}>
                <option value="$$ (11-30)">$$ (11-30)</option>
                <option value="$$$ (31-60)">$$$ (31-60)</option>
                <option value="$$$$ (61+)">$$$$ (61+)</option>
                <option value="Other">Other</option>
            </select><br/><br/>
            <input type="checkbox" name="reservationsNeeded"  onChange={clickHandler}/> Reservations Needed<br/><br/>
            <input type="checkbox" name="isParkingAvailable" onChange={clickHandler}/> Parking Available <br/><br/>
            <input type="checkbox" name="isWifiAvailable" onChange={clickHandler}/> Wifi Available <br/><br/>
            <input type="checkbox" name="isPoolAvailable" onChange={clickHandler}/> Pool Available <br/><br/>
            <input type="checkbox" name="isSpaAvailable" onChange={clickHandler}/> Spa Available<br/><br/>
            <input type="checkbox" name="isRestaurantAvailable" onChange={clickHandler}/> Restaurant Available<br/><br/>
            <label htmlFor="">Photos Link: </label><br/>
            <input type="text" name="photos" /><br/><br/>
            <button>Submit</button>

            </form>
        </>
    )


}

export default HotelForm