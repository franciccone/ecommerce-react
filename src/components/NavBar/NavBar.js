import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (

            <header className="navbar">
                <Link to={"/"}><h1 className="logo">LOGO</h1></Link>

                <nav className="menu">
                    <Link to={"/"} className="menu-link">Home</Link>
                    <Link to={"/regions"} className="menu-link">Regions</Link>
                    <Link to={"/about-us"} className="menu-link">About Us</Link>
                </nav>

                <CartWidget />
            </header>

    );

}

export default NavBar;