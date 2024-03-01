import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartThunk, setCart } from '../store/slices/cart.slice';
import CartProduct from '../../components/cartPage/CartProduct';
import useAuth from '../../Hooks/useAuth';
import getToken from '../../utils/getToken';
import './styles/cartPage.css'


const CartPage = () => {

    const cart = useSelector(store => store.cart);

    const createBuy = useAuth();

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getCartThunk())
    }, [])
    
const hanldeTotals = () =>{
 return cart.reduce((ac, cv) => ac + (cv.quantity * cv.product?.price), 0) 
}

const handleBuy = () =>{
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
  createBuy(url, '', getToken())
  dispatch(setCart([]));
}
    console.log(cart);
  return (
    <div>
      {
        cart.map(prod => (
          <CartProduct
          key={prod.id}
          prod={prod}
          />
        ))
      }
      <div className='totaldiv'>
        <h3>Total buy: $ {hanldeTotals()}</h3>
        <button className='buy' onClick={handleBuy}>Buy</button>
      </div>
    </div>
  )
}

export default CartPage