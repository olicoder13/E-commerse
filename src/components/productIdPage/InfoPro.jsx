import React, { useState } from 'react'
import { postCartThunk, updateCart, updateCartThunk} from '../../assets/store/slices/cart.slice'
import { useDispatch, useSelector } from 'react-redux'

const InfoPro = ({productId}) => {

    const [quantity, setQuantity] = useState(1)
    const dispatch  = useDispatch();
    const cart = useSelector(store => store.cart)

    const handleLess = () =>{
       if(quantity>1){
        setQuantity(quantity - 1)
       }
    }

    const handlePlus = () =>{
        setQuantity(quantity + 1)
    }

    const handleAddToCart = () =>{
        const item = cart.filter(prod => prod.productId === productId.id)
        if(item[0]){
            dispatch(updateCartThunk(...item, quantity))
        }else{
            dispatch(postCartThunk({
                quantity: quantity,
                productId: productId.id,
            }))
        }
        
    }

  return (
    <div className='info__container'>
        <div className='info'>
            <h3 className='marca'>{productId?.brand}</h3>
            <h2 className='titulo'>{productId?.title}</h2>
            <p>{productId?.description}</p>
        </div>
        <div className='botones'>
            <div>
                <p className='btn-quan'>Quantity</p>
                <button className='btn' onClick={handlePlus}>+</button>
                <span className='quantity'>{quantity}</span>
                <button className='btn' onClick={handleLess}>-</button>
            </div>
            <ul>
                <li className='btn-price'>Price</li>
                <li className='price'>$ {productId?.price}</li>
            </ul>
        </div>
        <div >
        <button className='btn-add' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    
    </div>
  )
}

export default InfoPro