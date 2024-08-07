import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from './reduxStore/cartSlice'

const Cart = () => {
  const cartItemSelector = useSelector((store)=>store.cart.items)

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return (
    <div className='p-5 m-5 text-center'>
      <h1 className='text-2xl font-bold'>cart</h1>
        <button className='p-2 text-lg text-white bg-black rounded-md'
          onClick={()=>handleClearCart()}
          >clearCart</button>
        <div className='w-6/12 mx-auto'>
          {cartItemSelector.length === 0 && <h1 className='p-5 text-xl shadow-sm '>Your cart is empty</h1>}
         <ItemList items={cartItemSelector}/>
      </div>
    </div>
  )
}

export default Cart