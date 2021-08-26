import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (

            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={"/"}>LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                        <NavDropdown title="Regions" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to={"/region/east"}>East</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/region/scandinavia"}>Scandinavia</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/region/south"}>South</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={"/region/west"}>West</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                    </Nav>
                    <CartWidget/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

    );

}

export default NavBar;