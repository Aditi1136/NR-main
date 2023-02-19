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
        console.log(json.data.name)
        setRestaurant(json.data)
        
    }
    return restaurant;
}

export default useRestaurant