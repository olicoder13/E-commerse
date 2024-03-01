import React from 'react'
import { Link } from 'react-router-dom'
import './styles/headerNav.css'

const HeaderNav = () => {
  return (
    <div className='headerNav'>
        <h1><Link to='/'><span>Oli</span>-Commerse</Link></h1>
        <nav>
          <ul className='headerNav__list'>
            <li><Link to='/login'><ion-icon name="person-circle-outline"></ion-icon></Link></li>
            <li><Link to='/purchases'><i className='bx bxs-shopping-bag'></i></Link></li>
            <li><Link to='/cart'><ion-icon name="cart-outline"></ion-icon></Link></li>
          </ul>
        </nav>
    </div>
  )
}

export default HeaderNav