import React from 'react'
import './styles/purchase.css'

const Purchase = ({prod}) => {
  console.log(prod);
  return (
    <div className='productBuyed'>
        <figure className='img'>
          <img src={prod.product.images[0].url} alt="" />
        </figure>
        <p className=''>{prod?.product.title}</p>
        <h3 className='quantity'>{prod.quantity}</h3>
        <p className='indila'>${prod.product.price}</p>
    </div>
  )
}

export default Purchase