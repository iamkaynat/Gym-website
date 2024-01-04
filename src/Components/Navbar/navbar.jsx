import React from 'react';
import { Link } from "react-router-dom"
import './navbar.css';
import Logo from '../Assests/Logo.png';
import Cart from '../Assests/cart_icon.png';
const NavBar = () => {
    return (
        <>
            <div className="navbar-first" >
                <div className="nav-logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="search">
                    <input id="input" type="text" name="search" placeholder="Search for Products brand and more" autocomplete="off" />

                </div>
                <div className="logincart">
                    <Link to="/login"><button> Log in</button></Link>
                    <Link to="/cart"><div id="cart-container"><p>Cart</p><img id="cart-icon" src={Cart} alt="" /></div></Link>

                </div>


            </div>
            <div className="navbar-second">
                <ul className="nav-menu">
                    <li><a href=" ">About</a> </li>
                    <li><a href=" ">About</a> </li>
                    <li><a href=" ">About</a> </li>
                    <li><a href=" ">About</a> </li>
                    <li><a href=" ">About</a> </li>
                </ul>

            </div>
        </>

    );
}
export default NavBar;