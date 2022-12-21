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
            <ShoppingCartIcon fontSize="large" />

        </div>
        <ul className={displayNav ? "NavList" : "NavList active"}>
            <li>
                <a href="">
                    <CloseIcon onClick={navDisplayHandler} />
                </a>
            </li>

            <li>
                <Link to="Home">Home</Link>
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

      
    </div>
  )
}

export default Nav
