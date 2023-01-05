import React, { useState } from 'react'
import { Link } from "react-router-dom"
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Nav.css'


const Nav = () => {

    const [displayNav, setDisplayNav] = useState(false)

    const navDisplayHandler = () => {
        setDisplayNav(!displayNav)
    }

    const [displayCart, setDisplayCart] = useState(false)

    const cartDisplayHandler =() => {
        setDisplayCart(!displayCart)

    }
  return (
    <div className='Nav'>
        <div className="Hamburger" onClick={navDisplayHandler}>
            <DensityMediumIcon fontWeight="bolder" />
        </div>
        <div className='Logo'>
            StyleRapy
        </div>
        <div className="Icons">
            <SearchIcon fontSize="large" />
            <ShoppingCartIcon fontSize="large" onClick={cartDisplayHandler} />

        </div>
        <ul className={displayNav ? "NavList" : "NavList active"}>
            <li>
                <a href="">
                    <CloseIcon onClick={navDisplayHandler} />
                </a>
            </li>

            <li>
                <Link to="/">Home</Link>
            </li>
                

            <li>
                <Link to="/About">About</Link>
            </li>
                

            <li>
                <Link to="/New Arrivals">New Arrivals</Link>
            </li>
                

            <li>
                <Link to="/Contact">Contact</Link>
            </li>
                
        </ul>
        <div className={displayCart ? "Cart" : "NavList active"}>
            <div className='CartNav'>
                <p>Cart</p>
                <CloseIcon className='CartClose' onClick={cartDisplayHandler} />
            </div>
            <div className="CartInfo">
                Your Cart is Empty!
            </div>
        </div>

      
    </div>
  )
}

export default Nav
