import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  return (
    <Navbar className='navbar' variant="light">
      <Container>
        <Link className='logo' to="/">Pro Health Care</Link>
        <Nav className="me-auto">
          <Link to="/" className='link' >Home</Link>
          <Link to="/doctors" className='link'>Doctors</Link>
          <Link to="/branches" className='link' >Branch</Link>

        </Nav>
        <Nav className='ms-auto'>
          <Link to="/login" className='link' >Login</Link>
          <Link to="/register" className='link' >Registration</Link>
        </Nav>

      </Container>
    </Navbar>
  );
};

export default NavBar;