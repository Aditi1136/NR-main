import React, { useState } from 'react'
import ItemCards from './ItemCards'

const RestaurantCategory = ({data,showitems, setShowIndex}) => {
    
    const menu = true;
    const handleItems= () => {
        setShowIndex()
    }
    
  return (
    <>
    <div className=' w-1/2 mx-auto p-4 my-6 shadow-lg cursor-pointer' onClick={handleItems}>
        <div className='flex justify-between'>
        <span className='text-xl font-bold'>{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
        </div>
        {showitems &&  <ItemCards items={data.itemCards} menucard={menu}/>}
       
    </div>
    
     </>
  )
}

export default RestaurantCategory