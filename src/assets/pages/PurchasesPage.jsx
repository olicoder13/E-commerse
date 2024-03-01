import React, { useEffect } from 'react'
import useFetch from '../../Hooks/useFetch'
import getToken from '../../utils/getToken'
import './styles/purchasePage.css'
import Purchase from '../../components/purchasePage/Purchase'







const PurchasesPage = () => {

  const [purchases, getPurchases] = useFetch()
  

  useEffect(() => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';
    getPurchases(url, getToken())
  }, [])
  
  //console.log(purchases);
  return (
    <div className='purchasepage'>
      <h2>Mis compras</h2>
      <div>
        {
          purchases?.map(prod => (
            <Purchase
            key={prod.id}
            prod={prod}
            />
          ))
        }
      </div>
    </div>
  )
}

export default PurchasesPage