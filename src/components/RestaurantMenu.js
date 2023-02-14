import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const [restaurant, setRestaurant] = useState(null)
    const params = useParams();

    const {id} = params;
    console.log(params)
    
    useEffect(() =>{
        getRestaurantInfo()
    },[])

    async function getRestaurantInfo(){
        const data = await fetch ("https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/v4/full?lat=18.572315433053607&lng=73.90913332829118&menuId="+id)
        const json = await data.json();
        console.log(json.data.name)
        setRestaurant(json.data)
        
    }

    if (!restaurant){
       return <Shimmer />
    }
    return(
        <div className="menu">
        <div>
        <h1>Namaste id : {id}</h1>
        <h2> {restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
        <h3> {restaurant.area}</h3>
        <h3> {restaurant.city}</h3>
        <h3> {restaurant.avgRating}</h3>
        <h3> {restaurant.costForTwoMsg }</h3>
        </div>
         <div>
              {console.log(Object.values(restaurant.menu.items))}
              <h1>Menu</h1>
              <ul>
               {Object.values(restaurant?.menu?.items).map((item)=>(
              <li key ={item.id}>{item.name}</li>
              ))}
              </ul>
        </div>
              </div>
              )
    
}

export default RestaurantMenu;