import React from 'react';

import { Navbar,Nav,NavDropdown,Image,Dropdown} from 'react-bootstrap'

import logo from '../../images/logo-coral.png'

import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

const Header = (props) => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><Image className ="icon" src={logo} rounded/></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="#blog">Blog</Nav.Link>
        <NavDropdown title="Catagories" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Web Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Software Development</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Android Development</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Admin</NavDropdown.Item>
        </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Navbar>
        </div>
    );
};

export default Header;