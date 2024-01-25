import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemCards from './ItemCards'
import { clearCart } from '../utils/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
 const itemcard = useSelector(store => store.cart.items)
 const dispatch = useDispatch()
 
 const handleClearCart = () =>{
    dispatch(clearCart())
 }

  return (
    <div className='w-1/2 m-auto'>
      <h1 className='text-xl font-bold p-4 text-center text-gray-700'>Cart Items -{itemcard.length}</h1>
      {itemcard.length===0 ? 
      <h1 className='text-lg text-center p-1 text-gray-500'>Your Cart is Empty!! Add food items to your cart!</h1>
      : <div className='text-center'><button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 my-2 rounded"
      onClick={handleClearCart}
      >Clear Cart</button></div>}
      <div className='text-center'><button className="bg-red-500 hover:bg-red-400 text-white py-2 px-4 my-2 rounded"><Link to="/" >Browse Restaurant </Link></button></div>
      <ItemCards items={itemcard}/>
      </div>
  )
}

export default Cart