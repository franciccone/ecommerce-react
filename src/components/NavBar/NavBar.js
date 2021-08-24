import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (

            <header className="navbar">
                <NavLink to={"/"}><h1 className="logo">LOGO</h1></NavLink>

                <nav className="menu">
                    <NavLink to={"/"} className="menu-link">Home</NavLink>
                    <NavLink to={"/region"} className="menu-link" exact activeClassName="active-class">Regions</NavLink>
                    <NavLink to={"/region/east"} className="menu-link" exact activeClassName="active-class">East</NavLink>
                    <NavLink to={"/region/scandinavia"} className="menu-link" exact activeClassName="active-class">Scandinavia</NavLink>
                    <NavLink to={"/region/south"} className="menu-link" exact activeClassName="active-class">South</NavLink>
                    <NavLink to={"/region/west"} className="menu-link" exact activeClassName="active-class">West</NavLink>
                    <NavLink to={"/about"} className="menu-link" exact activeClassName="active-class">About Us</NavLink>
                </nav>

                <CartWidget />
            </header>

    );

}

export default NavBar;