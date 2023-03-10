import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import useRestaurant from "../Utils/useRestaurant";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    
    const params = useParams();

    const {id} = params;
    console.log(params)

    const restaurant = useRestaurant(id)
    
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