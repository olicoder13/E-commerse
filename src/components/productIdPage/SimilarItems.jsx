import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch';
import ProductCard from '../homePage/ProductCard';
import './styles/infoPro.css'
import './styles/similarItems.css'

const SimilarItems = ({categoryId, prodId}) => {

    const [productsByCategory, setProductsByCategory] = useFetch();

    useEffect(() => {
        if(categoryId){
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;
        setProductsByCategory(url)
        }
        
    }, [categoryId])
    
//console.log(productsByCategory);

const cbFilter = (prod) =>{
   return  prod.id !== +prodId
}
    
  return (
    <div className='similiar-items'>
        <h2 className='similar-title'>Discover similar items</h2>
        <div className='productsContainer'>
            {
                productsByCategory?.filter(cbFilter).map(prod => (
                    <ProductCard
                        key={prod.id}
                        prod={prod}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default SimilarItems