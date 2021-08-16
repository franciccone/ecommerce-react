import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (

            <header className="navbar">
                <h1 className="logo">LOGO</h1>

                <nav className="menu">
                    <a className="menu-link" href="https://github.com/franciccone">Home</a>
                    <a className="menu-link" href="https://github.com/franciccone">Cities</a>
                    <a className="menu-link" href="https://github.com/franciccone">About Us</a>
                </nav>

                <CartWidget />
            </header>

    );

}

export default NavBar;