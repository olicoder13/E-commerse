import React from 'react'
import './styles/productCard.css'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({prod}) => {
    
  const navigate = useNavigate();

  const handleView = () => {
    navigate(`/product/${prod.id}`);
  }

  return (
    
    <article className='productCard'>
      <figure onClick={handleView} className='productCard__img'>
        <img className='product image' src={prod.images[0].url} alt="product image" />
        <img className='product image' src={prod.images[1].url} alt="product image" />
      </figure>
      <hr />
      <div>
        <ul className='productCard__info'>
          <li><span>{prod.brand}</span> <span>{prod.title}</span></li>
          <li><span>Price</span><span>{prod.price}</span></li>
        </ul>
      </div>
      <div className='productButtons'>
        <button>Add to cart</button>
        <button onClick={handleView}>View more</button>
      </div>
    </article>
    
  )
}

export default ProductCard