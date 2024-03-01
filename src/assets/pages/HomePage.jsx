import React, { useEffect, useRef, useState } from 'react';
import { getProductsThunk } from '../store/slices/products.slice'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/homePage/ProductCard';
import './styles/homePage.css'
import SelectCategory from '../../components/homePage/SelectCategory';
import FormPrice from '../../components/homePage/FormPrice';
const body = document.querySelector('body');


const HomePage = () => {
  
  const [formValue, setFormValue] = useState({
    from: 0,
    to: Infinity,
  })
  const [selectValue, setSelectValue] = useState(0);
  const  [productName, setProductName] = useState('');
const products = useSelector(store => store.products);
const dispatch = useDispatch();

useEffect(() => {
  const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
  dispatch(getProductsThunk(url))
}, [])

const  textInput = useRef();
const handleSearch = () =>{
    setProductName(textInput.current.value.toLowerCase().trim());
}

//console.log(productName);
//console.log(products);

const cbFilter = (prod) => { 
  const {from, to} = formValue;
  const ByName = prod.title.toLowerCase().includes(productName);
  const ByCategory = +selectValue===0 ? true :  prod.categoryId=== +selectValue;
  const ByPrice = +prod.price > +from && +prod.price < +to;
  return ByName && ByCategory && ByPrice;
}

//console.log(selectValue);

const handleDark = () => {
  body.classList.toggle('dark');
}
  return (
    <div>
        <div className='filtersContainer'>
        <button className='btn-darkMode' onClick={handleDark}>Dark Mode</button>
        <FormPrice
         setFormValue={setFormValue}
        />
        <div>
          <h3 className='title'>By Name</h3>
          <input placeholder='What are you looking for?' className="selectup" ref={textInput} onChange={handleSearch} type="text" />

        </div>
        <SelectCategory
          setSelectValue={setSelectValue}
        />
        </div>
        

        <section className='productsContainer'>
          {
            products?.filter(cbFilter).map(prod => (
              <ProductCard
              key={prod.id}
              prod={prod}
              />
            ))
          }
        </section>
    </div>
  )
}

export default HomePage;