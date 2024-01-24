import { useState, useEffect, useContext } from "react"
import { restaurantList } from "../config"
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnline from "../Utils/useOnline"
import UserContext from "../utils/UserContext"



function filterData(searchtxt,restaurants){
    const filterData = restaurants.filter((restaurant)=>restaurant.info.name.toLowerCase().includes (searchtxt.toLowerCase()))
    return filterData;
    
}

const Body = () =>{
    
    const [filteredRestaurants,setFilteredRestaurants] = useState([])
    const [searchtxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([])
    const {userDetails, setUserName} = useContext(UserContext)
    
    useEffect(()=>{
        getRestaurant()
    },[])

    async function getRestaurant(){
        const data = await fetch ("https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        console.log(json)
        
        setAllRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(allRestaurants)
        setFilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    }

    const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

    const isOnline = useOnline()

    if (!isOnline){
        return <h1> OOPS, you are OFFLINE, please check your connection </h1>
    }

    if (!allRestaurants) return null;

    //if (filteredRestaurants?.length === 0) return <h1>Not available</h1> 

    return (allRestaurants.length === 0)?<Shimmer />:(
        <>
        <div className="p-4 flex justify-center">
            <input type="text" className="text-lg w-1/4 p-2 border-2" placeholder="Search"
            value={searchtxt} 
            onChange = {(e) =>{
                setSearchTxt(e.target.value)
            }}
            />
            <button className="bg-red-500 text-white py-2 px-4 mx-3 rounded italic" onClick={()=>{
                const data = filterData(searchtxt,allRestaurants)
                setFilteredRestaurants(data)
                
            }}>Search</button>
            <label className="text-m p-2 text-gray-600 italic" >Tell Us Your Name</label>
           <input type="text" className="text-lg w-1/4 p-2 border-2" placeholder="Name"
            value={userDetails}
            onChange = {(e) =>{
                setUserName(e.target.value)
            }}/>
            
        </div>
        <div className="flex flex-wrap mt-2">
            {
              filteredRestaurants.map(restaurant =>{
                return (restaurant?.length === 0) ? <h1>Not available</h1> :(
                   <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                    {restaurant.info.isOpen ? (<RestaurantCardWithPromoted {...restaurant.info} />) : (<RestaurantCard {...restaurant.info} />)}
                    
              </Link> 
                )
                
              })  

            }
        </div>
        </>
    )
}

export default Body