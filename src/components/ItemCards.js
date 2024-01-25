import React from 'react'
import { IMG_CDN } from '../config'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../utils/cartSlice';
import { Link } from 'react-router-dom';

const ItemCards = ({items, menucard}) => {
    //console.log(items[4]?.card?.info?.name)
    const dispatch = useDispatch();

    const handleAddtoCart=(item) => {
        dispatch(addToCart(item))
    }

    const handleRemoveCart= (item) => {
        dispatch(removeFromCart(item))
    }
  return (
    <div>
        {items.map(item => (
        <div className= "border-b-2 p-2 text-left m-2 border-gray-200" key={item?.card?.info?.id}>
            <div className='flex justify-between'>
            <div className='w-9/12'>
            <div  className='text-left'>
                <span className='p-2 text-m text-gray-900'>{item?.card?.info?.name}</span>
                <span>₹ {item?.card?.info?.price ? item?.card?.info?.price/100 :item?.card?.info?.defaultPrice/100 }</span>
            </div>
            <p className='text-xs p-2'>
                {item?.card?.info?.description}
            </p>
            {menucard ? 
            <button className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 m-2 rounded" onClick={() => handleAddtoCart(item)}>
                <Link to = "/cart">Add to Cart</Link>
            </button> 
            :       
            <button className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 m-2 rounded" onClick={() => handleRemoveCart(item)}>Remove Item</button>}
            </div>
           
            <div className='text-center w-3/12'>
                    <img src={IMG_CDN+ item.card.info.imageId} className='w-full'/>      
            </div>
            </div>  
        </div>
        ))}
    </div>
  )
}

export default ItemCards