import { useEffect, useState } from "react"
import { REST_API_URL } from "../config"

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null)

    useEffect(() =>{
        getRestaurantInfo()
    },[])
    async function getRestaurantInfo(){
        const data = await fetch (REST_API_URL+id)
        const json = await data.json();
        setRestaurant(json.data)
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        //     .itemCards);
    }
    return restaurant;
}

export default useRestaurant