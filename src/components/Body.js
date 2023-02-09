import { useState } from "react"
import { restaurantList } from "../config"
import RestaurantCard from "./RestaurantCard"


function filterData(searchtxt,restaurants){
    const filterData = restaurants.filter((restaurant)=>restaurant.data.name.includes (searchtxt))

    return filterData;
    
}

const Body = () =>{
    
    const [searchtxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList)
    return(
        <>
        <div className="search-container">
            <input type="text" className="searchtxt" placeholder="Search"
            value={searchtxt} 
            onChange = {(e) =>{
                setSearchTxt(e.target.value)
            }}
            />
            <button onClick={()=>{
                const data = filterData(searchtxt,restaurants)
                setRestaurants(data)
                
            }}>Search</button>
            
        </div>
        <div className="restaurant-list">
            {
              restaurants.map(restaurant =>{
                return (
                    <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
                )
              })  
            }
        </div>
        </>
    )
}

export default Body