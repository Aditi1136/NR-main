import { useState, useEffect } from "react"
import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnline from "../Utils/useOnline"


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
        const data = await fetch ("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.572315433053607&lng=73.90913332829118&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2].data?.data?.cards)
        setFilteredRestaurants(json?.data?.cards[2].data?.data?.cards)
        console.log(json)
    }

    const isOnline = useOnline()

    if (!isOnline){
        return <h1> OOPS, you are OFFLINE, please check your connection </h1>
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
                   <Link to={"/restaurant/"+restaurant.data.id}><RestaurantCard {...restaurant.data} key={restaurant.data.id}/></Link> 
                )
                
              })  

            }
        </div>
        </>
    )
}

export default Body