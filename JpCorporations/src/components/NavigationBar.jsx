import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'; // Assuming this is your CSS file path
import logo from '../assets/jplogo.png'; // Assuming this is your logo file path

function NavigationBar() {
    const [isActive, setIsActive] = useState(false);

    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    return (
        <Navbar expand="lg" fixed="top" className={`navbar ${isActive ? 'active' : ''}`}>
            <Navbar.Brand className='navbar-brand ' as={Link} to="/">
                <img src={logo} alt="Logo" className="navbar-logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
            <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
