import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import { useParams } from 'react-router-dom';
import InfoPro from '../../components/productIdPage/InfoPro';
import SimilarItems from '../../components/productIdPage/SimilarItems';
import SliderImagenes from '../../components/productIdPage/SliderImagenes';
import './styles/productIdPage.css'





const ProductIdPage = () => {

  

  const [productId , getProductId] = useFetch();
  const param = useParams();
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`
    getProductId(url)
  }, [param])

 
  return (
    <div className='productId'>
      <div className='product'>
      <SliderImagenes
        images={productId?.images}
      />
      <InfoPro
      productId={productId}
      />
      </div>
      <SimilarItems
        categoryId={productId?.categoryId}
        prodId={param.id}
      />
    </div>
  )
}

export default ProductIdPage