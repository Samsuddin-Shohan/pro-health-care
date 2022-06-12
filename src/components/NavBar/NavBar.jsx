import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

  return (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
      <Container>


        <Link className='logo' to="/">Pro Health Care</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">


          <Nav className="ms-auto">
            <Link to="/" className='link' >Home</Link>
            <Link to="/createappointment" className='link' >Make Appointment</Link>
            <Link to="/appointmentlist" className='link' > Appointment List</Link>

            <Link to="/crateservice" className='link' >Create Service</Link>

            <Link to="/login" className='link' >Login</Link>
            <Link to="/register" className='link' >Registration</Link>
          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>
  );
};

export default NavBar;