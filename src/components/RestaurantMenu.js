import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN } from "../config";
import useRestaurant from "../Utils/useRestaurant";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () =>{
    const [showIndex, setShowIndex] = useState(null);
    const params = useParams();

    const {id} = params;
    console.log(params)

    const restaurant = useRestaurant(id)
    console.log(restaurant)
    //.cardGroupMap.REGULAR.cards[2].card.card.itemCards //.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2]
    

    if (!restaurant){
       return <Shimmer />
    }

    const { name, cuisines, costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;

    

    const { itemCards } =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    console.log(itemCards)

    const categories =
    restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(categories);

    return(
        <div className="text-center">
        <div>
        <h1 className="text-xl font-bold m-2"> {name}</h1>
        <p className="text-sm">{cuisines.join(", ")} - {costForTwoMessage}</p>
        {categories.map((category,index)=><RestaurantCategory
         key={category?.card?.card.title} 
         data={category?.card?.card}
         showitems={index === showIndex ? true : false }
         setShowIndex={() => setShowIndex(index)}
         />)
         
}
        </div>
        </div>)
        
    
}

export default RestaurantMenu;