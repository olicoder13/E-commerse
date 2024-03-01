import React, { useState } from 'react'
import './styles/cartProduct.css'
import { deleteCartThunk, updateCart, updateCartThunk } from '../../assets/store/slices/cart.slice'
import { useDispatch } from 'react-redux'


const CartProduct = ({prod}) => {

const dispatch = useDispatch();

  const handleRemove = () =>{
    dispatch(deleteCartThunk(prod.id));
  }

 const handlePlus = () =>{
    dispatch(updateCartThunk(prod, 1))
 }

 const handleLess = () =>{
  if(prod.quantity > 1){
    dispatch(updateCartThunk(prod, -1))
  }
 }


  return (
    prod.product &&
    <div className='cartProduct'>
      <figure>
        <img src={prod.product.images[0].url} alt="product image" />
      </figure>
      <div className='infaim'>
        <h2>{prod.product.title}</h2>
        <button className='btn-auth' onClick={handleLess}>-</button>
        <span className='btn-auth'>{prod.quantity}</span>
        <button className='btn-auth' onClick={handlePlus}>+</button>
        <h3 className='pricesol'>Price: ${prod.product.price * prod.quantity}</h3>
      </div>
      <button className='delete' onClick={handleRemove}>Delete</button>
    </div>
  )
}

export default CartProduct