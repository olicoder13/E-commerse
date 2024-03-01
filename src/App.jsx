
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './assets/pages/HomePage'
import ProductIdPage from './assets/pages/ProductIdPage'

import LoginPage from './assets/pages/LoginPage'
import PurchasesPage from './assets/pages/PurchasesPage'
import RegisterPage from './assets/pages/RegisterPage'
import { useSelector } from 'react-redux'
import store from './assets/store'
import CartPage from './assets/pages/CartPage'
import HeaderNav from './components/shared/HeaderNav'
import ProtectedRoutes from './assets/pages/ProtectedRoutes'

function App() {
  
  

 
  return (
    <div>
      <div>
      <HeaderNav/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/product/:id' element={<ProductIdPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        
        <Route element={<ProtectedRoutes/>}>
          <Route path='/purchases' element={<PurchasesPage/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Route>
      </Routes>
      </div>
      
    </div>
    
  )
}

export default App
