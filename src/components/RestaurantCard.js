import { IMG_CDN } from "../config"

const RestaurantCard =({name, cuisines, cloudinaryImageId, lastMileTravelString}) =>{
    return (
        <div className="border-2 w-72 m-3 h-96 px-4 hover:bg-gray-300">
            <img src={IMG_CDN + cloudinaryImageId}/>
            <h2 className="text-xl p-3 font-bold">{name}</h2>
            <h3 className="text-lg px-3 ">{cuisines.join(", ")}</h3>
            <h4 className="text-lg px-3 ">{lastMileTravelString} away</h4>
        </div>
    )
}

export const withPromotedLabel = (RestaurantCard) =>{
    return(props) =>{
        return (
            <div>
                <label className="absolute p-1 mx-3 bg-black text-white italic">open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard