import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
    return (

            <header className="navbar">
                <h1>LOGO</h1>

                <nav>
                    <a href="https://github.com/franciccone">Home</a>
                    <a href="https://github.com/franciccone">Cities</a>
                    <a href="https://github.com/franciccone">About Us</a>
                </nav>

                <CartWidget />
            </header>

    );

}

export default NavBar;