import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './NavBar.css';

const NavBar = () => {
  const { user, error, logOut } = useAuth();
  const history = useHistory();

  const handleLogout = () => {
    logOut();
    history.push('/login');

  }


  return (
    <Navbar collapseOnSelect expand="lg" className='navbar'>
      <Container>


        <Link className='logo' to="/">Pro Health Care</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">


          <Nav className="ms-auto">
            <Link to="/" className='link' >Home</Link>
            {
              user?.name != 'admin' && <Link to="/createappointment" className='link' >Make Appointment</Link>
            }
            {
              user?.name != 'admin' && <Link to="/myappointments" className='link' >My Appointments</Link>
            }
            {
              user?.name === 'admin' && <Link to="/appointmentlist" className='link' > Appointment List</Link>
            }
            {
              user?.name === 'admin' && <Link to="/crateservice" className='link' >Create Service</Link>
            }
            {
              user?.name === 'admin' && <Link to="/cratedoctors" className='link' >Create Doctors</Link>
            }

            {user?.name ? (
              <p className='username'>{user.name}</p>
            ) : (
              <Link to="/register" className='link' >Registration</Link>
            )}
            {user?.name ? (
              <Button className='link' onClick={handleLogout}>Logout</Button>
            ) : (
              <Link to="/login" className='link' >Login</Link>
            )}


          </Nav>
        </Navbar.Collapse>



      </Container>
    </Navbar>
  );
};

export default NavBar;