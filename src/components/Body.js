import { useState, useEffect } from "react"
import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"


function filterData(searchtxt,restaurants){
    const filterData = restaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes (searchtxt.toLowerCase()))
    return filterData;
    
}

const Body = () =>{
    
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchtxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([])
    
    useEffect(()=>{
        getRestaurant()
    },[])

    async function getRestaurant(){
        const data = await fetch ("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2].data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards)
        console.log(json)
    }

    if (!allRestaurants) return null;

    //if (filteredRestaurants?.length === 0) return <h1>Not available</h1> 

    return (allRestaurants.length === 0)?<Shimmer />:(
        <>
        <div className="search-container">
            <input type="text" className="searchtxt" placeholder="Search"
            value={searchtxt} 
            onChange = {(e) =>{
                setSearchTxt(e.target.value)
            }}
            />
            <button onClick={()=>{
                const data = filterData(searchtxt,allRestaurants)
                setFilteredRestaurants(data)
                
            }}>Search</button>
            
        </div>
        <div className="restaurant-list">
            {
              filteredRestaurants.map(restaurant =>{
                return (restaurant?.length === 0) ? <h1>Not available</h1> :(
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                )
                
              })  

            }
        </div>
        </>
    )
}

export default Body